local M = {}

local sqlite3 = require('lsqlite3')

local db = sqlite3.open('Yatay.db')

local exist_stmt
local insert_stmt
local update_stmt

M.exist = function(project, name)
	exist_stmt = assert(db:prepare('SELECT * FROM Yatay WHERE project = ? AND block = ?'))
	assert(exist_stmt:bind_values(project, name) == sqlite3.OK)
	local result = false 
	for row in exist_stmt:nrows() do
		result = true		
	end
	return result
end

M.update = function(project, block, code)
	update_stmt = assert(db:prepare('UPDATE Yatay SET code = ? WHERE project = ? AND block = ?'))
	assert(update_stmt:bind_values(code, project, block) == sqlite3.OK)	
	assert(update_stmt:step() == sqlite3.DONE)	
	assert(update_stmt:finalize() == sqlite3.OK)
end

M.insert = function(project, block, code)
	insert_stmt = assert(db:prepare('INSERT INTO Yatay VALUES (?, ?, ?)'))
	assert(insert_stmt:bind_values(project, block, code) == sqlite3.OK)
	assert(insert_stmt:step())
	assert(insert_stmt:finalize() == sqlite3.OK)
end

M.get_behaviours = function(project)
	results = ''
	bxs_stmt = assert(db:prepare('SELECT * FROM Yatay WHERE project = ?'))
	assert(bxs_stmt:bind_values(project) == sqlite3.OK)
	for bx in bxs_stmt:nrows() do 
		if (results == '') then 
			results = bx['block'] .. ',' .. bx['code']
		else
			results = results .. ';' .. bx['block'] .. ',' .. bx['code']
		end
	end
	return results
end

M.get_projects = function()
	results = {}
	projs_stmt = assert(db:prepare('SELECT distinct(project) FROM Yatay'))
	local i = 1 
	for projs in projs_stmt:nrows() do 
		results[i] = projs['project']
		i = i + 1
	end
	return results
end

M.init = function(conf)
	db:exec('CREATE TABLE Yatay (project VARCHAR, block VARCHAR, code VARCHAR, PRIMARY KEY (project, block))')
	db:exec('commit')

	print('DataBase is up...')
--	assert(db:close() == sqlite3.OK)
end

return M
