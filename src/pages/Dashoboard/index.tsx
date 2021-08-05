import React from 'react';
import { Courses, PropsCourses } from '../../components/Courses';
import { Header } from '../../components/Header';
import { ContainerCoursesTopo } from '../../components/ContainerCoursesTopo';

import Math from '../../assets/icons/Math.png';
import Fisica from '../../assets/icons/Fisica.png';
import English from '../../assets/icons/English.png';
import Quimica from '../../assets/icons/Quimica.png';
import Talk from '../../assets/icons/Talk.png';
import Build from '../../assets/icons/Build.png';

import { Container, ContainerCourses } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

export interface PropsData extends PropsCourses {
  id: string;
}

export function Dashboard() {
  const data: PropsData[] = [
    {
      id: '1',
      discipline: 'Matemática',
      classes: '16 Aulas',
      imageDiscipline: Math,
    },
    {
      id: '2',
      discipline: 'Física',
      classes: '25 Aulas',
      imageDiscipline: Fisica,
    },
    {
      id: '3',
      discipline: 'Inglês',
      classes: '16 Aulas',
      imageDiscipline: English,
    },
    {
      id: '4',
      discipline: 'Química',
      classes: '18 Aulas',
      imageDiscipline: Quimica,
    },
    {
      id: '5',
      discipline: 'Português',
      classes: '16 Aulas',
      imageDiscipline: Talk,
    },
    {
      id: '6',
      discipline: 'Educação Física',
      classes: '16 Aulas',
      imageDiscipline: Build,
    },
  ];

  const { navigate } = useNavigation();

  const handleNavigate = useCallback(() => {
    navigate('Classes');
  }, [navigate]);
  return (
    <Container>
      <Header />

      <ContainerCoursesTopo title="Categorias" description="43 cursos" />

      <ContainerCourses
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Courses data={item} onPress={handleNavigate} />
        )}
      />
    </Container>
  );
}
