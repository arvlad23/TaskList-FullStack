import api from '@/api/api'
import Task from '@/components/Task'
import { TaskType } from '@/types/task'
import { TaskFilterType } from '@/types/taskFilter'
import { Input } from '@mui/joy'
import { Button, FormGroup } from '@mui/material'
import { useEffect, useState } from 'react'

const Tasks = () => {
	const [tasks, setTasks] = useState<TaskType[]>([])
	const [filter, setFilter] = useState<TaskFilterType>(TaskFilterType.all)

	useEffect(() => {
		api
			.get('/tasks')
			.then(response => setTasks(response.data))
			.catch(error => console.error(error))
	}, [])

	const handleRemove = (id: number) => {
		api
			.delete<TaskType>(`/tasks/${id}`)
			.then(() => {
				setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
			})
			.catch(error => console.error(error))
	}

	const handleAdd = (title: string) => {
		api
			.post('/tasks', {
				title: title,
			} as TaskType)
			.then(response => {
				setTasks(prevTasks => [...prevTasks, response.data])
			})
	}
	const handleChecked = (updatedTask: Partial<TaskType>) => {
		api
			.patch<TaskType>(`/tasks/${updatedTask.id}`, updatedTask)
			.then(response =>
				setTasks(prevTasks =>
					prevTasks.map(el => (el.id == updatedTask.id ? response.data : el))
				)
			)
	}
	const filterTasks = (value: TaskFilterType) => {
		setFilter(value)
	}
	return (
		<section className='tasks'>
			<div className='container'>
				<div className='tasks-wrapper shadow-md p-[28px] rounded-[10px] flex flex-col'>
					<Input
						variant='outlined'
						placeholder='Enter Task'
						color='neutral'
						className='my-2'
						onKeyDown={e => {
							if (e.key === 'Enter') {
								handleAdd((e.target as HTMLInputElement).value)
								;(e.target as HTMLInputElement).value = ''
							}
						}}
					/>
					<div className='filters-wrapper flex gap-x-[10px]'>
						<Button
							onClick={() => filterTasks(TaskFilterType.all)}
							className='normal-case'
						>
							All
						</Button>
						<Button
							onClick={() => filterTasks(TaskFilterType.pending)}
							className='normal-case'
						>
							Pending
						</Button>
						<Button
							onClick={() => filterTasks(TaskFilterType.completed)}
							className='normal-case'
						>
							Completed
						</Button>
					</div>
					<FormGroup>
						{tasks
							.filter(task =>
								filter === TaskFilterType.all
									? true
									: filter === TaskFilterType.completed
									? task.isCompleted
									: !task.isCompleted
							)
							.map(task => (
								<Task
									className={
										'my-[4px] px-[8px] bg-[#f7f7f7] task-item rounded-md overflow-hidden'
									}
									key={task.id}
									task={task}
									remove={handleRemove}
									checked={handleChecked}
								/>
							))}
					</FormGroup>
				</div>
			</div>
		</section>
	)
}

export default Tasks
