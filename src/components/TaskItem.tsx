import React, { useState } from 'react';

interface TaskItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, text, completed, onToggle, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    marginBottom: '8px',
    border: '1px solid #e0e0e0',
    transition: 'all 0.2s ease-in-out',
    boxShadow: isHovered ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none',
  };

  const checkboxStyle: React.CSSProperties = {
    width: '18px',
    height: '18px',
    cursor: 'pointer',
    marginRight: '12px',
    accentColor: '#4CAF50',
  };

  const textStyle: React.CSSProperties = {
    flex: 1,
    fontSize: '16px',
    color: completed ? '#9e9e9e' : '#333333',
    textDecoration: completed ? 'line-through' : 'none',
    transition: 'all 0.2s ease-in-out',
    userSelect: 'none',
  };

  const deleteButtonStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    padding: '4px 8px',
    borderRadius: '4px',
    transition: 'all 0.2s ease-in-out',
    opacity: isHovered ? 1 : 0,
    transform: isHovered ? 'scale(1)' : 'scale(0.8)',
  };

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={containerStyle}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
        style={checkboxStyle}
      />
      <span style={textStyle}>
        {text}
      </span>
      {isHovered && (
        <button 
          onClick={() => onDelete(id)}
          style={deleteButtonStyle}
          aria-label="Delete task"
        >
          🗑️
        </button>
      )}
    </div>
  );
};

export default TaskItem;
