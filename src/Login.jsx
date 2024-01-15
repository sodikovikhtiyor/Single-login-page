import { Box, Button, ButtonGroup, Flex, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import "./App.css";
const Login = () => {
  const [user, setUser] = useState({
    Name: "",
    Number: "",
    City: "",
  });
  let name, value;
  const data = (e) => {
    {
      name = e.target.name;
      value = e.target.value;
      setUser({ ...user, [name]: value });
    }
  };
  const getData = async (e) => {
    const { Name, Number, City } = user;
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify({
        Name,
        Number,
        City,
      }),
    };
    const res = await fetch(
      "https://singleloginpage-cb2cd-default-rtdb.firebaseio.com/UserData.json",
      options
    );
    if (res) {
      alert(
        "Tashakkur, yaxshi inson!\n Ma'lumotlaringiz qabul qilindi.\n Keyingi sahifaga o'tib, hadyani qabul qiling"
      );
      window.location.href =
        "https://drive.google.com/file/d/1JmMCp2nnsFEWvzhPQhvB8bEaDyoEgmgV/view?usp=drivesdk";
    } else {
      alert("Error Occured");
    }
  };
  return (
    <Box className="showcase">
      <Flex
        className="form"
        justifyContent="start"
        h="100vh"
        alignItems="center"
        flexDirection="column"
      >
        <Heading textAlign="center" my="5rem" color='#fff' textShadow='2px 2px 2px black'>
          "365 KUN TAQVIMI"ni qo'lga kiritish uchun quyidagi anketani to'ldiring!
        </Heading>
        <Box as="form" method="POST" textAlign="center" w="300px" >
          <Flex
            flexDirection="column"
            p="3rem"
            border="1px solid #717171"
            borderRadius="10px"
            align="center"
            gap="1rem"
          >
            <Box
              p="1rem"
              borderRadius="10px"
              border="1px solid black"
              as="input"
              onChange={data}
              autoComplete="off"
              required
              value={user.Name}
              type="text"
              name="Name"
              w="100%"
              placeholder="F.I.O"
            />
            <Box
              p="1rem"
              borderRadius="10px"
              border="1px solid black"
              as="input"
              onChange={data}
              autoComplete="off"
              required
              value={user.Number}
              type="number"
              name="Number"
              placeholder="Telefon raqam"
              w="100%"
            />
            <Box
              p="1rem"
              borderRadius="10px"
              border="1px solid black"
              as="input"
              onChange={data}
              autoComplete="off"
              required
              value={user.City}
              type="text"
              name="City"
              placeholder="Shahar"
              w="100%"
            />

            <Box
              as="a"
              color="white"
              bg="blue"
              borderRadius="30px"
              textDecoration="none"
              p="20px"
              w="100%"
              href="https://drive.google.com/file/d/1JmMCp2nnsFEWvzhPQhvB8bEaDyoEgmgV/view?usp=drivesdk"
              onClick={getData}
            >
              Yuborish
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
