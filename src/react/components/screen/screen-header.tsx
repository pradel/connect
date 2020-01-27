import React from 'react';
import { Box, Flex, Text } from '@blockstack/ui';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import { useAppDetails } from '../../hooks/useAppDetails';
import { Logo } from '../logo';
import { AppIcon } from '../app-icon';

interface HeaderTitleProps {
  title?: string | JSX.Element;
  hideIcon?: boolean;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ hideIcon, title }) => (
  <Flex align="center">
    {hideIcon ? null : <Logo mr={2} />}
    <Text fontWeight="bold" fontSize={'12px'}>
      {title}
    </Text>
  </Flex>
);

interface ScreenHeaderProps {
  title?: string | JSX.Element;
  close?: () => void;
  hideIcon?: boolean;
}

export const ScreenHeader = ({ title = 'Data Vault', hideIcon = false, ...rest }: ScreenHeaderProps) => {
  const { name, icon } = useAppDetails();
  return (
    <Flex
      p={[4, 5]}
      mb={6}
      borderBottom="1px solid"
      borderBottomColor="inherit"
      borderRadius={['unset', '6px 6px 0 0']}
      bg="white"
      align="center"
      justify="space-between"
      {...rest}
    >
      <Flex align="center">
        {!hideIcon ? <AppIcon src={icon} alt={name || 'loading'} /> : null}
        {!hideIcon ? (
          <Box pr={1} pl={2} color="ink.300">
            <ChevronRightIcon size={20} />
          </Box>
        ) : null}
        <HeaderTitle hideIcon={hideIcon} title={title} />
      </Flex>
    </Flex>
  );
};
