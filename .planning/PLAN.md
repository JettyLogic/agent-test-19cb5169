```xml
<task type="auto">
  <name>Create TaskItem component file with basic structure</name>
  <files>src/components/TaskItem.tsx</files>
  <action>
Create the TaskItem component file with the following implementation:

1. Import necessary dependencies:
   - React
   - CSS module or inline styles for hover effects

2. Define the TaskItem props interface:
   ```typescript
   interface TaskItemProps {
     id: string;
     text: string;
     completed: boolean;
     onToggle: (id: string) => void;
     onDelete: (id: string) => void;
   }
   ```

3. Implement the TaskItem functional component:
   - Use state to track hover status for showing/hiding delete button
   - Render a container div with onMouseEnter and onMouseLeave handlers
   - Include a checkbox input with:
     * type="checkbox"
     * checked={completed}
     * onChange={() => onToggle(id)}
   - Display task text with conditional styling:
     * Apply strikethrough (text-decoration: line-through) when completed is true
     * Use a span or label element
   - Add delete button:
     * Show only when hovering (conditional rendering or opacity control)
     * Use a trash icon (🗑️ emoji or icon library)
     * onClick={() => onDelete(id)}

4. Apply appropriate styling:
   - Flexbox layout for horizontal alignment
   - Spacing between checkbox, text, and delete button
   - Smooth hover transitions
   - Pointer cursor on interactive elements

5. Export the component as default export

Example structure:
```typescript
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

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ /* styles */ }}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </span>
      {isHovered && (
        <button onClick={() => onDelete(id)}>
          🗑️
        </button>
      )}
    </div>
  );
};

export default TaskItem;
```
  </action>
  <verify>cat src/components/TaskItem.tsx | grep -E "(interface TaskItemProps|const TaskItem|export default)"</verify>
  <done>File exists with TaskItemProps interface defined, TaskItem component implemented with all required props (id, text, completed, onToggle, onDelete), and default export present</done>
</task>

<task type="auto">
  <name>Add styling and hover behavior to TaskItem</name>
  <files>src/components/TaskItem.tsx</files>
  <action>
Enhance the TaskItem component with proper styling and hover interactions:

1. Add inline styles or create a companion CSS module (TaskItem.module.css):
   - Container div styles:
     * display: flex
     * align-items: center
     * padding: 12px 16px
     * border-bottom: 1px solid #eee
     * gap: 12px (spacing between elements)
     * transition: background-color 0.2s
     * background-color changes on hover (e.g., #f9f9f9)

2. Checkbox styles:
   - Cursor: pointer
   - Width and height: 18px
   - Margin-right: 8px

3. Text span styles:
   - Flex: 1 (takes remaining space)
   - Color changes when completed (e.g., #888)
   - Transition for smooth strikethrough appearance

4. Delete button styles:
   - Border: none
   - Background: transparent or red on hover
   - Cursor: pointer
   - Padding: 4px 8px
   - Border-radius: 4px
   - Font-size: 18px
   - Transition: opacity 0.2s, background-color 0.2s
   - Opacity: 0 when not hovered (or use conditional rendering)

5. Ensure hover state for delete button visibility is working correctly

6. Add accessibility attributes:
   - aria-label for delete button ("Delete task")
   - aria-checked for checkbox (handled automatically)
  </action>
  <verify>cat src/components/TaskItem.tsx | grep -E "(style=|className=|textDecoration|isHovered)" | head -5</verify>
  <done>TaskItem component has proper styling with hover effects, strikethrough for completed tasks, and delete button that appears on hover</done>
</task>

<task type="manual">
  <name>Visual verification of TaskItem component</name>
  <files>src/components/TaskItem.tsx</files>
  <action>
Manually verify the TaskItem component behavior:

1. Create a test file or add temporary code to App.tsx to render TaskItem with sample data
2. Check the following behaviors:
   - Checkbox displays correctly and is clickable
   - Task text shows normally when not completed
   - Task text shows strikethrough when completed prop is true
   - Delete button (trash icon) is hidden by default
   - Delete button appears when hovering over the task item
   - Delete button disappears when mouse leaves the task item
   - onToggle callback is triggered when checkbox is clicked
   - onDelete callback is triggered when delete button is clicked
3. Test with multiple TaskItem instances to ensure hover states are independent
4. Verify responsive behavior and styling consistency
  </action>
  <verify>echo "Manual verification required: Test TaskItem in browser"</verify>
  <done>TaskItem component visually verified with all acceptance criteria met: checkbox works, strikethrough appears for completed tasks, and delete button shows on hover</done>
</task>
```