import { memo, VFC } from "react";
import { Badge,Box } from '@chakra-ui/react';
import { AspectRatio } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { PieChart, Pie, Text, LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts'


export const Home: VFC = memo(() => {

  const data = [
    {
      index: 0,
      name: 'データ1',
      value: 300,
    },
    {
      index: 1,
      name: 'データ2',
      value: 200,
    },
    {
      index: 2,
      name: 'データ3',
      value: 380,
    },
    {
      index: 3,
      name: 'データ3',
      value: 80,
    },
    {
      index: 4,
      name: 'データ4',
      value: 40,
    }
  ]

  const data2 = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <>
  <Badge fontSize="2xl" color="#296BFF" marginLeft="50px" marginTop="30px">視聴中</Badge>
  <div style={{display:"flex", padding:"16px", justifyContent: "space-evenly"}}>
<AspectRatio  w='400px'h="250px" ratio={1}>
  <iframe style={{ borderRadius: "10px"}}
    title='naruto'
    src='https://www.youtube.com/embed/QhBnZ6NPOY0'
    allowFullScreen
  />
</AspectRatio>
<AspectRatio w='400px'h="250px"  ratio={1}>
  <iframe style={{ borderRadius: "10px"}}
    title='naruto'
    src='https://www.youtube.com/embed/QhBnZ6NPOY0'
    allowFullScreen
  />
</AspectRatio>
<AspectRatio w='400px'h="250px" ratio={1}>
  <iframe style={{ borderRadius: "10px"}}
    title='naruto'
    src='https://www.youtube.com/embed/QhBnZ6NPOY0'
    allowFullScreen
  />
</AspectRatio>
<AspectRatio  w='400px'h="250px" ratio={1}>
  <iframe style={{ borderRadius: "10px"}}
    title='naruto'
    src='https://www.youtube.com/embed/QhBnZ6NPOY0'
    allowFullScreen
  />
</AspectRatio>
</div>

<div style={{display:"flex", padding:"16px", justifyContent: "space-evenly"}}>
<div>
<Badge fontSize="2xl" color="#296BFF" marginLeft="50px" marginBottom="20px">本日の練習メニュー</Badge>

<Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Section 3 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Section 4 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Section 5 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Section 6 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Section 7 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
</div>


<PieChart width={730} height={250}>
  <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" label/>
</PieChart>

<LineChart width={500} height={300} data={data2}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
  </LineChart>

</div>
  </>
  );
});
