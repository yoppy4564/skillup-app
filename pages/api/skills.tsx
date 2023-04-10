const skillsData = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 80 },
        { name: 'Next.js', level: 70 },
        { name: 'Vue.js', level: 50 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 70 },
        { name: 'Python', level: 50 },
      ],
    },
    {
      category: 'Database',
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'MongoDB', level: 50 },
      ],
    },
  ];

export default function server(req, res){
    res.status(200).json(skillsData)
}