import { Box, Center, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Mhatw from "../../../assets/cristian.jpg";
import Alexis from "../../../assets/alexis.jpg";
import Frank from "../../../assets/frank.jpg";
import Gavino from "../../../assets/gavino.jpg";
import MemberCard from "./MemberCard";

const members = [
  {
    name: "Cristian Espinoza",
    role: "Full Stack Developer",
    description:
      "Web developer with management experience thanks to an industrial engineering career. A graphic designer since 2019, and passionate about innovation and developing challenging technological projects. Strong logical thinker, fast learner, and detail-oriented. Looking for a position which allows for creation, ideation, questioning, learning and constant improvement",
    image: Mhatw,
    github: "https://github.com/mhatw",
    linkedin: "https://www.linkedin.com/in/mhatw/",
  },
  {
    name: "Alexis Parave",
    role: "Full Stack Developer",
    description:
      "My last job was closely related to software development, which led me to discover a great inclination towards programming.  Without realizing it, I found myself involved in the tech industry so I decided to make the transition fully into it, convinced of its influence in the modern world and attracted by the community of developers. I consider myself a self-taught professional, with a high capacity for analysis and excellent critical thinking skills; with the ease to adapt to any work environment quickly and learn new tools and technologies. I am passionate about programming, have a collaborative spirit, an open mind, and I am eager to show the contribution and impact that I can have in this industry.",
    image: Alexis,
    github: "https://github.com/alexisparave94",
    linkedin: "https://www.linkedin.com/in/alexis-parave/",
  },
  {
    name: "Frank Cano",
    role: "Full Stack Developer",
    description: "Web developer",
    image: Frank,
    github: "https://github.com/frankcdlc",
    linkedin: "https://www.linkedin.com/in/frank-cano-dlc/",
  },
  {
    name: "Cesar Gavino",
    role: "Full Stack Developer",
    description:
      "Bachelor of Industrial Engineering, with experience in digital transformation, ERP SAP implementation, functional process design, business process management (BPM), product management, procurement, demand planning, category management, data structure and analytics.",
    image: Gavino,
    github: "https://github.com/CZR8",
    linkedin: "https://www.linkedin.com/in/cesargavinotorres/",
  },
];

export default function OurTeam() {
  return (
    <Box>
      <Center>
        <Heading
          as="h1"
          fontSize="3xl"
          fontWeight="bold"
          mb={4}
          mt="3rem"
          position={"relative"}
          _after={{
            content: "''",
            width: "full",
            height: "30%",
            position: "absolute",
            bottom: 0,
            left: 0,
            bg: "blue.200",
            zIndex: -1,
          }}
        >
          Meet the team
        </Heading>
      </Center>
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={{ base: 0, sm: 1, md: 10, lg: 10, xl: 10 }}
        p={4}
      >
        {members.map((member) => (
          <MemberCard
            key={member.name}
            name={member.name}
            description={member.description}
            url={member.image}
            github={member.github}
            linkedin={member.linkedin}
            role={member.role}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
