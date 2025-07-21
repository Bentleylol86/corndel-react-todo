// User.jsx
function User({ user }) {
  return (
    <li>
      <strong>{user.name}</strong> — {user.email}
    </li>
  );
}

export default User;