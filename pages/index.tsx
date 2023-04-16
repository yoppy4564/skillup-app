import Image from 'next/image'
import { Box } from '@mui/system'
import Layout from '../components/layout'
import Introduce from '../components/introduce'
import SkillCard from '../components/skillCard'
import Seo from '../components/seo'
import { Skill, SkillCategory } from '../types/skills';
import React from 'react'
import { IntroduceProps } from '../types/introduce'
import { GetStaticProps } from 'next'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3000";


interface IndexProps{
    skills: SkillCategory[];
    introduce: IntroduceProps;
}

const Index = ({skills, introduce}: IndexProps) => {
    
    return (
        <Layout>
            <Seo title="トップページ" description="これはトップページです" />
            <Box sx={{position: 'relative', height: '70vh', margin: '0px 0px'}}>
                <Image src="/images/top-image.png" alt="hero" fill quality={90} priority />
                <Box
                    sx ={{
                        postion: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(5%, 50%)',
                        color: 'blue',
                        fontWeight: 'bold',
                        fontSize: 20,
                        textAlign: 'left',
                        width: '100%',
                        fontFamily: 'Arial',
                    }}>
                        <h1>Empower Your Tech Journey</h1>
                        <h3>Unleash Your Potential </h3>
                </Box>
            </Box>
            <Introduce imageSrc="/images/Yoshiaki.png" imageAlt="introduce image" introduce={introduce} />
            <SkillCard skillsData={skills}/>
        </Layout>
    )
}

export default Index

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  try {
    const [responseSkills, responseIntroduce] = await Promise.all([
      axios.get(`/api/skills`).then(res => res.data),
      axios.get(`/api/introduce`).then(res => res.data)
    ]);
    const skillsData: SkillCategory[] = responseSkills;
    const introduceData: IntroduceProps = responseIntroduce;
    return {
      props: {
        skills: skillsData,
        introduce: introduceData,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        skills: [],
        introduce: { heading: '', text: '' },
      },
    };
  }
};
