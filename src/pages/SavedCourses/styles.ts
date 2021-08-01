import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { PropsData } from '.';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContainerCoursesSaves = styled(
  FlatList as new () => FlatList<PropsData>,
).attrs({
  showsHorizontalScrollIndicator: false,
  columnWrapperStyle: { justifyContent: 'space-between' },
  contentContainerStyle: {
    paddingBottom: 20,
  },
  numColumns: 2,
})`
  padding: 24px;
`;
