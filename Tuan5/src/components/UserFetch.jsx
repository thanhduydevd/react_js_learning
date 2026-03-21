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

function UserFetch() {
    const [users, setUsers] = React.useState([]);
    const [name, setName] = useState('');
    const [activeUserId, setActiveUserId] = useState(null);

    const handleFetch =  () => {
        fetch('https://698535a86964f10bf2529a6b.mockapi.io/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error('Error fetching users:', error));
    };


    const toggleUser = useCallback((id) => {
        setActiveUserId(prevId => (prevId === id ? null : id));
    }, [users]);

    const updateUser = (id) => {
        fetch(`https://698535a86964f10bf2529a6b.mockapi.io/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                name: name,
            })
        })
        .then(response => response.json())
        .then(updatedUser => {
            setUsers(users.map(user => 
                user.id === id ? updatedUser : user
            ));
            setName('');
            setActiveUserId(null);
        })
        .catch(error => console.error('Error updating user:', error));
        
    };

    const deleteUser = useCallback((id) => {
        fetch(`https://698535a86964f10bf2529a6b.mockapi.io/users/${id}`, {
            method: 'DELETE',
        })
        .catch(error => console.error('Error deleting user:', error))
        .finally(() => {
            handleFetch();
        });
        
    }, [users]);

    const addUser = () => {
        fetch('https://698535a86964f10bf2529a6b.mockapi.io/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
            })
        })
        .then(response => response.json())
        .then(newUser => { 
            setUsers([...users, newUser]);
            setName('');
        })
        .catch(error => console.error('Error adding user:', error));
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

export default UserFetch
