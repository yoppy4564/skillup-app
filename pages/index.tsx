import Image from 'next/image'
import { Box } from '@mui/system'
import Layout from '../components/layout'
import Introduce from '../components/introduce'
import SkillCard from '../components/skillCard'
import Seo from '../components/seo'
import { useEffect, useState } from 'react'
import api from './api/axios';
import { Skill, SkillCategory, SkillsData } from '../types/skills';
import React from 'react'

const Index = () => {
    const [skills, setSkills] = useState<SkillCategory[]>([]);

    const [tabIndex, setTabIndex] = useState(0);
    const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);

    useEffect(() => {
        setSelectedSkills(skills[tabIndex]?.skills ?? []);
      }, [skills, tabIndex]);

    useEffect(() => {
      const fetchSkills = async () => {
        try {
          const response = await api.get(`/api/skills`);
          const skills = response.data;
          setSkills(skills);
          console.log(skills);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchSkills();
    }, []);
    const YoshiakiText = "私は名古屋工業大学大学院を卒業後、ソフトバンク株式会社に入社し、IT分野での経験を積んできました。3つのプロジェクトに関わり、柔軟な発想力や高い課題解決能力が求められる環境での経験を積んでおります。最初のプロジェクトでは、ITシステムの運用監視と復旧統制を担当していました。24時間365日の運用監視に加え、定期的な動作確認や一時復旧対応の実施も担当し、システムの安定運用に努めました。次のプロジェクトでは、ITシステムの運用監視で導入するツールのQAエンジニアとして従事していました。品質向上のための改善提案を行い、開発チームや運用チームにフィードバックをすることでシステム全体の品質を向上させることに貢献しました。最後のプロジェクトでは、RPAツールやGoogle Apps Scriptを駆使した自動化を行い、定型的な業務やルーティンワークを自動化することで、作業時間の削減や作業精度の向上を実現しました。RPAツールやGoogle Apps Scriptは比較的容易に扱えるため、効率化に向けた改善提案を積極的に行い、周囲のスタッフからも高い評価を受けていました。また、副業として金融機関向けの認可認証アプリのQAエンジニアとして、テスト設計からテスト実行までの一連のプロセスを担当していました。テストプロセスの改善案を提案したり、開発チームとの協力体制を強化するなど、主体的に業務に取り組みました。これまでの経験を活かし、新しいチャレンジに取り組み、自己成長と企業の発展に貢献できる仕事を探しています。"
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
            <Introduce imageSrc="/images/Yoshiaki.png" imageAlt="introduce image" text={YoshiakiText} heading="滑って捌けるエンジニア" />
            <SkillCard skillsData={skills}/>
        </Layout>
    )
}

export default Index
