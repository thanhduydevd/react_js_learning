import React, { useCallback, useEffect, useState } from 'react'

const UserItem = React.memo(function UserItem({ user, onToggle, onDelete, active }) {
  return (
    <div className="todo-item">
      <div>
        <label
        className={
            user.id === active ? "completed" : ""
        }>{user.name}</label>
      </div>

      <div>
        <button onClick={() => onDelete(user.id)}>
            delete
        </button>
        <button onClick={() => onToggle(user.id)}>
            toggle
        </button>
      </div>
    </div>
  );
});

function UserFetchAsync() {
    const [users, setUsers] = React.useState([]);
    const [name, setName] = useState('');
    const [activeUserId, setActiveUserId] = useState(null);

    const handleFetch =  async () => {
        try {
            const response = await fetch('https://698535a86964f10bf2529a6b.mockapi.io/users');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };


    const toggleUser = useCallback((id) => {
        setActiveUserId(prevId => (prevId === id ? null : id));
    }, [users]);

    const updateUser = async (id) => {
        try {
            const response = await fetch(`https://698535a86964f10bf2529a6b.mockapi.io/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
                    name: name,
                })
            });
            const updatedUser = await response.json();
            setUsers(users.map(user => 
                user.id === id ? updatedUser : user
            ));
            setName('');
            setActiveUserId(null);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const deleteUser = useCallback(async (id) => {
        try {
            await fetch(`https://698535a86964f10bf2529a6b.mockapi.io/users/${id}`, {
                method: 'DELETE',
            }); 
            handleFetch();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }, [users]);

    const addUser = async () => {
        try {
            const response = await fetch('https://698535a86964f10bf2529a6b.mockapi.io/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                })
            })
            const newUser = await response.json();
            setUsers([...users, newUser]);
            setName('');
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };


    useEffect(() => {
        handleFetch();

    }, []);

    useEffect(() => {
        if (activeUserId) {
            const user = users.find(u => u.id === activeUserId);
            setName(user?.name || '');
        } else {
            setName('');
        }
    }, [activeUserId, users]);

  return (
    <div>
      <div>
        <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
        <button disabled={!name.trim() || activeUserId} onClick={addUser}>Add User</button>
        <button disabled={!name.trim() || !activeUserId} onClick={() => updateUser(activeUserId)}>Update</button>
      </div>

      <div className="todolist">
        {users.map(user => (
          <UserItem
            key={user.id}
            user={user}
            onToggle={toggleUser}
            onDelete={deleteUser}
            active={activeUserId}
          />
        ))}
      </div>
    </div>
  );
}

export default UserFetchAsync
