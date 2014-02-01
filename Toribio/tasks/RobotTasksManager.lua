local M = {}

M.init = function(conf)
	local sched = require 'sched'
	RBTManagerActivate = false
	return sched.run(function()
		local toribio = require 'toribio'
	    local behaviours = require 'catalog'.get_catalog('behaviours')
		activeBehaviour = nil
		terminateRBTMTasks = false

		print("YATAY: RobotTaskManager is up...")    

		while true do
			if (RBTManagerActivate == true) then
				local done = false
				if activeBehaviour then
		            done = activeBehaviour.done					
		        end
				
		        previousBehaviour = activeBehaviour

				sched.signal('Compete!')
				sched.yield()

				--Swap behaviour viejo con nuevo
				if (previousBehaviour ~= activeBehaviour) then
					if (previousBehaviour ~= nil) then
						print(2)
						previousBehaviour.ReleaseControl()
						previousBehaviour.task:kill()
						previousBehaviour.compete_task:kill()

		                previousBehaviour.init() --Seteo init para que en el futuro siga respondiendo a signals
					end
				end
				if (activeBehaviour) then
					sched.signal(activeBehaviour.name)  --Cada task tiene un signal unico con su nombre. Despertar la task activa.
					sched.yield()
				end
			

			
				if done then
					if (activeBehaviour) then
						activeBehaviour.task:kill()
						activeBehaviour.compete_task:kill()
						activeBehaviour.init()
--						if (previousBehaviour == activeBehaviour) then --I have finished running, but still have control, so let's run again
--							sched.signal(activeBehaviour.name)  --Cada task tiene un signal unico con su nombre. Despertar la task activa.
--						end

					end
					sched.yield()
				end
				sched.signal("TestsMayNowRun")
			else
				activeBehaviour = nil
				previousBehaviour = nil
				sched.signal("TestsMayNowRun")
				sched.sleep(0.4)
			end --end if (RBTManagerActivate == true)
				
			sched.yield()
		end

	end)
end

return M

