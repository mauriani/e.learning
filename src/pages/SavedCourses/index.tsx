import React from 'react';
import { ContainerCoursesTopo } from '../../components/ContainerCoursesTopo';
import { Courses, PropsCourses } from '../../components/Courses';
import { Header } from '../../components/Header';

import Math from '../../assets/icons/Math.png';
import Fisica from '../../assets/icons/Fisica.png';
import English from '../../assets/icons/English.png';

import { Container, ContainerCoursesSaves } from './styles';

export interface PropsData extends PropsCourses {
  id: string;
}

export function SavedCourses() {
  const data: PropsData[] = [
    {
      id: '1',
      discipline: 'Matemática',
      classes: '16 Aulas',
      imageDiscipline: Math,
      icon: 'trash',
    },
    {
      id: '2',
      discipline: 'Física',
      classes: '25 Aulas',
      imageDiscipline: Fisica,
      icon: 'trash',
    },
    {
      id: '3',
      discipline: 'Inglês',
      classes: '16 Aulas',
      imageDiscipline: English,
      icon: 'trash',
    },
  ];
  return (
    <Container>
      <Header />
      <ContainerCoursesTopo title="Cursos salvos" />

      <ContainerCoursesSaves
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Courses data={item} onPress={() => {}} />}
      />
    </Container>
  );
}
