
export let tasks = [
    {
        id: '1',
        tagArr: ['Economic', 'Finance'],
        todo: 'Manage Finance',
        assign: ['Mustafa'],
        size: 'Small',
        created_date: 'June, 13 2023 11:53PM',
        description: 'TaskFlow1 is an intuitive task management system designed to help teams collaborate and manage their projects with ease. It offers powerful features such as task tracking, project organization, scheduling, and communication tools to keep teams organized and on top of their projects.'
    },
    {
        id: '2',
        tagArr: ['Marketing', 'Social', 'Contents'],
        todo: 'Fix instagram content issues',
        assign: ['Kanat'],
        size: 'Small',
        created_date: 'May, 28 2023 15:06PM',
        description: 'TaskFlow2 is an intuitive task management system designed to help teams collaborate and manage their projects with ease. It offers powerful features such as task tracking, project organization, scheduling, and communication tools to keep teams organized and on top of their projects.'
    },
    {
        id: '3',
        tagArr: ['Website', 'Marketing'],
        todo: 'Promote the website',
        assign: ['Olzhas'],
        size: 'Medium',
        created_date: 'May, 25 2023 12:12PM',
        description: 'TaskFlow3 is an intuitive task management system designed to help teams collaborate and manage their projects with ease. It offers powerful features such as task tracking, project organization, scheduling, and communication tools to keep teams organized and on top of their projects.'
    },
    {
        id: '4',
        tagArr: ['Website', 'AI'],
        todo: 'Integrate ChatGPT',
        assign: ['Beka'],
        size: 'Small',
        created_date: 'May, 21 2023 15:43PM',
        description: 'TaskFlow4 is an intuitive task management system designed to help teams collaborate and manage their projects with ease. It offers powerful features such as task tracking, project organization, scheduling, and communication tools to keep teams organized and on top of their projects.'
    },
    {
        id: '5',
        tagArr: ['Visual ID', 'Design', 'Logo'],
        todo: 'Re design the logo',
        assign: [['Alish']],
        size: 'Large',
        created_date: 'May, 20 2023 15:06PM',
        description: 'TaskFlow5 is an intuitive task management system designed to help teams collaborate and manage their projects with ease. It offers powerful features such as task tracking, project organization, scheduling, and communication tools to keep teams organized and on top of their projects.'
    },
    {
        id: '6',
        tagArr: ['Visual ID', 'Design', 'Logo'],
        todo: 'Re design the logo',
        assign: ['Alish'],
        size: 'Large',
        created_date: 'May, 20 2023 15:06PM',
        description: 'TaskFlow5 is an intuitive task management system designed to help teams collaborate and manage their projects with ease. It offers powerful features such as task tracking, project organization, scheduling, and communication tools to keep teams organized and on top of their projects.'
    },
    {
        id: '7',
        tagArr: ['Visual ID', 'Design', 'Logo'],
        todo: 'Re design the logo',
        assign: ['Alish'],
        size: 'Large',
        created_date: 'May, 20 2023 15:06PM',
        description: 'TaskFlow5 is an intuitive task management system designed to help teams collaborate and manage their projects with ease. It offers powerful features such as task tracking, project organization, scheduling, and communication tools to keep teams organized and on top of their projects.'
    },
    {
        id: '8',
        tagArr: ['Visual ID', 'Design', 'Logo'],
        todo: 'Re design the logo',
        assign: ['Alish'],
        size: 'Large',
        created_date: 'May, 20 2023 15:06PM',
        description: 'TaskFlow5 is an intuitive task management system designed to help teams collaborate and manage their projects with ease. It offers powerful features such as task tracking, project organization, scheduling, and communication tools to keep teams organized and on top of their projects.'
    },
    {
        id: '9',
        tagArr: ['Visual ID', 'Design', 'Logo'],
        todo: 'Re design the logo',
        assign: ['Alish'],
        size: 'Large',
        created_date: 'May, 20 2023 15:06PM',
        description: 'TaskFlow5 is an intuitive task management system designed to help teams collaborate and manage their projects with ease. It offers powerful features such as task tracking, project organization, scheduling, and communication tools to keep teams organized and on top of their projects.'
    },
    {
        id: '10',
        tagArr: ['Visual ID', 'Design', 'Logo'],
        todo: 'Re design the logo',
        assign: ['Alish'],
        size: 'Large',
        created_date: 'May, 20 2023 15:06PM',
        description: 'TaskFlow5 is an intuitive task management system designed to help teams collaborate and manage their projects with ease. It offers powerful features such as task tracking, project organization, scheduling, and communication tools to keep teams organized and on top of their projects.'
    }
]

export let kanbanState = {
    open: {
        title : 'Open',
        items : tasks
    },
    inProgress: {
        title: 'In Progress',
        items : []
    },

    done: {
        title: 'Done',
        items: []
    }
}