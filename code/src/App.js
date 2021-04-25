import React, { useCallback, useState } from 'react';
import {
  Box,
  Image,
  VStack,
  HStack,
  Center,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Checkbox,
  Button,
  Flex,
  Link,
} from '@chakra-ui/react';
import { css } from '@emotion/react';
import { HiUser, HiLockClosed, HiPhone } from 'react-icons/hi';
import { FaWeibo, FaWeixin, FaQq } from 'react-icons/fa';

import jsLogo from './jslogo.png';
import jsSlogan from './jsslogan.png';
import qr from './qr.png';

function Login() {
  return (
    <>
      <Box
        border="1px solid #c8c8c8"
        borderRadius="4px"
        bg="rgba(181,181,181,0.1)"
        w="100%"
      >
        <InputGroup>
          <InputLeftElement h="50px" children={<HiUser />} />
          <Input
            type="text"
            h="50px"
            fontSize="13px"
            placeholder="手机号或邮箱"
            focusBorderColor="inherit"
            border="none"
            borderBottom="1px solid #c8c8c8"
            borderRadius="0px"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement h="50px" children={<HiLockClosed />} />
          <Input
            type="password"
            h="50px"
            fontSize="13px"
            placeholder="密码"
            focusBorderColor="inherit"
            border="none"
          />
        </InputGroup>
      </Box>
      <HStack w="100%" justifyContent="space-between" my="15px">
        <Checkbox size="sm" defaultChecked fontSize="13px">
          记住我
        </Checkbox>
        <Text fontSize="13px">登陆遇到问题？</Text>
      </HStack>
      <Button
        w="100%"
        borderRadius="30px"
        bg="#3194d0"
        color="#fff"
        _hover={{ bg: '#187cb7' }}
      >
        登录
      </Button>
      <HStack spacing="50px" mt="50px" mb="10px">
        <Text fontSize="12px">社交账号登录</Text>
      </HStack>
      <HStack spacing="30px" mt="20px">
        <FaWeibo color="#e95244" fontSize="25px" cursor="pointer" />
        <FaWeixin color="#00bb29" fontSize="28px" cursor="pointer" />
        <FaQq color="#498ad5" fontSize="24px" cursor="pointer" />
      </HStack>
    </>
  );
}

function Register() {
  return (
    <>
      <Box
        border="1px solid #c8c8c8"
        borderRadius="4px"
        bg="rgba(181,181,181,0.1)"
        w="100%"
      >
        <InputGroup>
          <InputLeftElement h="50px" children={<HiUser />} />
          <Input
            type="text"
            h="50px"
            fontSize="13px"
            placeholder="你的昵称"
            focusBorderColor="inherit"
            border="none"
            borderBottom="1px solid #c8c8c8"
            borderRadius="0px"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement h="50px" children={<HiPhone />} />
          <Input
            type="number"
            maxLength="11"
            h="50px"
            fontSize="13px"
            placeholder="手机号"
            focusBorderColor="inherit"
            borderBottom="1px solid #c8c8c8"
            border="none"
            borderRadius="0px"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement h="50px" children={<HiLockClosed />} />
          <Input
            type="password"
            h="50px"
            fontSize="13px"
            placeholder="密码"
            focusBorderColor="inherit"
            border="none"
          />
        </InputGroup>
      </Box>
      <Button
        w="100%"
        borderRadius="30px"
        bg="#42c02e"
        color="#fff"
        _hover={{ bg: '#3db922' }}
        mt="20px"
        mb="10px"
      >
        注册
      </Button>
      <Text fontSize="12px" lineHeight="20px">
        点击 “注册” 即表示您同意并愿意遵守简书
      </Text>
      <Text fontSize="12px" lineHeight="20px">
        <Link color="#3194d0">用户协议</Link>和
        <Link color="#3194d0">隐私政策</Link>
      </Text>
      <HStack spacing="50px" mt="50px" mb="10px">
        <Text fontSize="12px">社交账号直接注册</Text>
      </HStack>
      <HStack spacing="30px" mt="20px">
        <FaWeixin color="#00bb29" fontSize="28px" cursor="pointer" />
        <FaQq color="#498ad5" fontSize="24px" cursor="pointer" />
      </HStack>
    </>
  );
}

function App() {
  const [currentTab, setCurrentTab] = useState('login');
  const handleChangeTab = useCallback(flag => {
    setCurrentTab(flag);
  });
  var activeStyle = {
    color: '#ea6f5a',
    fontWeight: 700,
    borderBottom: '2px solid #ea6f5a',
  };
  return (
    <Box display="flex" bg="#f1f1f1" h="100vh" alignItems="center">
      <Box position="absolute" left="50px" top="56px" w="100px">
        <Image src={jsLogo} />
      </Box>
      <HStack
        w="820px"
        h="600px"
        mx="auto"
        alignItems="start"
        justifyContent="space-between"
      >
        <VStack pl="45px" position="relative">
          <Image src={jsSlogan} w="328px" />
          <Box
            position="absolute"
            left="60px"
            top="452px"
            display="flex"
            alignItems="center"
          >
            <Center
              w="252px"
              h="46px"
              borderRadius="46px"
              bg="#ea6f5a"
              color="#fff"
              fontSize="18px"
              mr="15px"
            >
              下载简书APP
            </Center>
            <Center w="46px" h="46px" borderRadius="5px" bg="#fff">
              <Image src={qr} w="36px" h="36px" />
            </Center>
          </Box>
        </VStack>
        <Flex
          direction="column"
          align="center"
          w="400px"
          bg="#fff"
          padding="50px 50px 30px"
          borderRadius="4px"
          boxShadow="0 0 8px rgb(0 0 0 / 10%)"
        >
          <HStack fontSize="18px" color="#969696" mb="50px">
            <Text
              p="10px"
              cursor="pointer"
              onClick={handleChangeTab.bind(null, 'login')}
              style={currentTab === 'login' ? activeStyle : {}}
              _hover={
                currentTab === 'login'
                  ? {}
                  : { borderBottom: '2px solid #ea6f5a', pb: '8px' }
              }
            >
              登陆
            </Text>
            <Text>·</Text>
            <Text
              p="10px"
              cursor="pointer"
              onClick={handleChangeTab.bind(null, 'register')}
              style={currentTab === 'register' ? activeStyle : {}}
              _hover={
                currentTab === 'register'
                  ? {}
                  : { borderBottom: '2px solid #ea6f5a', pb: '8px' }
              }
            >
              注册
            </Text>
          </HStack>
          {currentTab === 'login' ? <Login /> : <Register />}
        </Flex>
      </HStack>
    </Box>
  );
}

export default App;
