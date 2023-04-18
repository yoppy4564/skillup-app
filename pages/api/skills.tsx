const skillsData = [
    {
      category: 'Language',
      skills: [
        { name: 'React', level: 80 },
        { name: 'Next.js', level: 50 },
        { name: 'javascript', level: 50 },
        { name: 'HTML', level: 50},
        { name: 'css', level: 60},
        { name: 'Node.js', level: 80 },
        { name: 'java', level: 80 },
        { name: 'Python', level: 50 },
      ],
    },
    {
      category: 'Tools',
      skills: [
        { name: 'github', level: 50 },
        { name: 'vscode', level: 50 },
        { name: 'IntelliJ', level: 50 },
      ],
    },
    {
      category: 'Platform',
      skills: [
        { name: 'AWS', level: 30 },
        { name: 'Azure', level: 20 },
      ],
    },
  ];

export default function server(req:any, res:any){
    res.status(200).json(skillsData)
}