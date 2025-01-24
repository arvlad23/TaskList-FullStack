import { TaskType } from '@/types/task'
import { Checkbox, FormControlLabel, IconButton } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
type TaskItemProps = {
	task: TaskType
	remove: (id: number) => void
	checked?: (data: Partial<TaskType>) => void
} & React.HTMLAttributes<HTMLDivElement>

const Task = ({ task, remove, checked, ...props }: TaskItemProps) => {
	const [isChecked, setIsChecked] = useState(task.isCompleted)
	const handleRemove = () => {
		remove(task.id)
	}
	useEffect(() => {
		setIsChecked(task.isCompleted)
	}, [task.isCompleted])
	const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
		setIsChecked(e.target.checked)
		task.isCompleted = e.target.checked
		if (checked) {
			checked(task)
		}
	}

	return (
		<div {...props}>
			<FormControlLabel
				control={
					<Checkbox
						onChange={handleChecked}
						className={'task-checkbox '}
						checked={isChecked}
					/>
				}
				label={
					<>
						<div className='flex items-center justify-between flex-1'>
							<div className='title-wrapper mr-0'>{task.title} </div>
							<IconButton
								sx={{
									aspectRatio: '1/1',
									width: 'auto',
									height: 'calc(100% - 12px)',
									display: 'inline-flex',
									fontSize: '12px',
								}}
								onClick={handleRemove}
							>
								X
							</IconButton>
						</div>
					</>
				}
				slotProps={{
					typography: {
						className: 'w-full',
					},
				}}
				className={`${
					isChecked ? 'checked' : ''
				} transition-all  w-full m-0 flex `}
			></FormControlLabel>
		</div>
	)
}

export default Task
