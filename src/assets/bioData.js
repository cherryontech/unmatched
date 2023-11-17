// professionals images
import Reshma from './images/professionals/Reshma.jpg';
import Anna from './images/professionals/Anna.jpg';
import Farida from './images/professionals/Farida.jpg';
import Jedidah from './images/professionals/Jedidah.png';
import Maya from './images/professionals/Maya.png';
import Rana from './images/professionals/Rana.avif';
import Nicole from './images/professionals/Nicole.jpg';
import Melissa from './images/professionals/Melissa.png';
import Maggie from './images/professionals/Maggie.jpg';
import James from './images/professionals/James.jpg';
import Tazin from './images/professionals/Tazin.jpg';
import huda from './images/professionals/huda.jpeg';
// resources cover images
import reshmaResource1 from './images/resources/reshma1.jpg';
import reshmaResource2 from './images/resources/reshma2.jpg';
import annaResource1 from './images/resources/anna1.jpg';
import annaResource2 from './images/resources/anna2.jpg';
import faridaResource1 from './images/resources/farida1.jpg';
import jediahResource1 from './images/resources/jediah1.jpg';
import jediahResource2 from './images/resources/jediah2.jpg';
import mayaResource1 from './images/resources/maya1.png';
import mayaResource2 from './images/resources/maya2.png';
import ranaResource1 from './images/resources/rana1.jpg';
import ranaResource2 from './images/resources/rana2.jpg';
import nicoleResource1 from './images/resources/nicole1.jpg';
import nicoleResource2 from './images/resources/nicole2.jpg';
import melissaResource from './images/resources/mell.jpg';
import melRes from './images/resources/melres.jpg';



export const bioData = [
  {
    id: 1,
    name: 'Reshma',
    fullName: 'Reshma Saujani',
    occupation: 'Founder of Girls Who Code',
    bio: {
      summary: `Reshma Saujani is a renowned activist and author committed to empowering women and girls, bridging the tech gender gap, and advocating for moms. She is best known as the founder of Girls Who Code, a non-profit organization closing the tech gender gap by offering girls, women, and nonbinary people access to programming education.
      Reshma began her career as an attorney and made history as the first Indian American woman to run for U.S. Congress in 2010. Witnessing the gender gap in computer science classrooms during her campaign inspired her to create Girls Who Code in 2012.`,
      impact: `Reshma's impact extends from her bestseller Brave, Not Perfect to her influential TED talk, “Teach girls bravery, not perfection”. Girls Who Code has reached over 500 million people worldwide and has taught more than 300,000 girls how to code. Reshma’s passion for moms established Moms First in 2020, a non-profit supporting working moms through policy change.`,
      career: `In her 2023 Smith College commencement speech, Reshma shared about her upbringing as the child of Indian refugees living in the U.S. She recalled feeling isolated because no one else looked like her; she had no one to identify with. This feeling remained with her even in her successful career as an attorney.
      Reshma said imposter syndrome makes us look like the problem, but we’re not. She is committed to female empowerment because she said we have a broken system that makes us feel we’re not enough when we are. So it’s up to us to fix the system.`,
    },
    resources: [
      {
        title:
          'Video: Smith College 2023 commencement speech about imposter syndrome',
        image: reshmaResource1,
        link: 'https://youtu.be/BoHDDgeQtlc?si=GK-XKujZ9iRm_F7Q',
      },
      {
        title:
          "Reshma's pick for McKinsey & Company's 2022 summer reading list",
        image: reshmaResource2,
        link: 'https://www.linkedin.com/posts/reshma-saujani_2022-summer-reading-guide-activity-6962747179719389184-sWMs/',
      },
    ],
    image: Reshma,
    tags:['SOUTH ASIAN','WOMEN']
  },
  {
    id: 2,
    name: 'Anna',
    fullName: 'Anna Lytical',
    occupation: 'LGBTQ+ Coding Educator',
    bio: {
      summary: `Anna Lytical, also known as Billy Jacobson, is a Google engineer and coding drag queen who's dedicated to making coding easy, accessible, and inclusive, especially for the LGBTQ+ community. She is known for dressing in drag while live-streaming beginner coding tutorials.
      Anna's work is inspired by her co workers, her love of drag, and her desire to shine a light on those who are out and in tech. In her effort to increase LGBTQ+ representation in tech, Anna posts free and engaging coding lessons that incorporate elements of drag.`,
      impact: `Anna has global reach because of her social media presence She has taught thousands of people how to code through her live YouTube and Twitch tutorials and has gained more than 125,000 followers on TikTok alone. Anna's reach extends to live and virtual speaking engagements- including the OpenJS World Conference-that focus on coding, inclusion, and queer representation in tech.`,
      career: `In her CodeLand 2021 keynote speech, Anna shared her programming journey as a drag performer and her commitment to inclusion and diversity in tech. To have a tech career, Anna realized she had to overcome two fears: not understanding how to learn programming and not feeling like she fit into the tech community.
      Anna encouraged aspiring developers to break tech problems into manageable parts, connect those problems to their interests, and seek help when they need it. She also noted that attending conferences for people you can identify with is a great way to get validated and build your community. In college, Anna found her community through Out for Undergrad, a tech conference for queer college students.
      Anna's message is that anyone can code, regardless of their identity. She wants individuals to know they can be technical and express themselves, and that the tech world is for everyone.`,
    },
    resources: [
      {
        title: 'Video: Drag Queen Codes Wordle',
        image: annaResource1,
        link: 'https://youtu.be/Jw_2q6Hp-Qk?si=IHNedkWZTA2BTNtC',
      },
      {
        title:
          'Video: It Gets Better Project | Anna Lytical on diversity and representation in tech',
        image: annaResource2,
        link: 'https://youtu.be/glIdusrWYYw?si=EqmYUM-uhRnsYHiH',
      },
    ],
    image: Anna,
    tags:['LGBTQ+'],
  },
  {
    id: 3,
    name: 'Farida',
    fullName: 'Farida Bedwei',
    occupation: 'Co-Founder of Logiciel',
    bio: {
      summary: `Farida Bedwei is a software engineer, tech entrepreneur, disability rights advocate, and author with cerebral palsy. She is the co-founder and former Chief Technical Officer of banking software company Logiciel and one of Africa's most powerful women in the fintech industry.
      Farida's interest in tech began with her home computer, which made written communication easier for her. Fast-forward about 10 years into her tech career: while managing a microfinance company's IT infrastructure, Farida built a banking system that simplified the company's processes and facilitated rapid expansion. Competitors' growing interest in Farida's system inspired her and her employer to co-found Logiciel.`,
      impact: `Farida's commitment to financial inclusion for people without bank accounts has worldwide influence. More than 100 microfinance companies globally use her cloud software platform to make small loans available to their customers immediately. As a member of The Girls in ICT Committee, she also supports women and girls in pursuing tech careers.
      Farida's disability advocacy inspired her to change the narrative about people with disabilities. She created Karmzah-the world's first comic book superheroine with cerebral palsy- to give children with disabilities a character they can identify with and to show the world that people with disabilities are capable and strong`,
      career: `Despite having cerebral palsya neurological condition that limits a person's ability to move, balance themseives, and adjust their posture-Farida was determined to prove to herself and the world that she could be a successful software engineer. She did that and more.
      In interviews ano speaking engagements, Farida talks about her upbringing as a child who was always taught to try and never to say "I can't." She encourages aspiring tech professionals to do the same and follow this guide: make your education plan, fight for your dream job. and go where there are gaps in the market.`,
    },
    resources: [
      {
        title: 'Video: Disability, Does Not Mean Inability',
        image: faridaResource1,
        link: 'https://youtu.be/R0PoixS9fYk?si=4C2DmXTzY7Cor5vv',
      },
    ],
    image: Farida,
    tags:['BLACK', 'WOMEN', 'DISABILITY']
  },
  {
    id: 4,
    name: 'Jedidah',
    fullName: 'Jedidah Isler',
    occupation: 'Astrophysicist and Professor',
    bio: {
      summary: `Jedidah Isler is an astrophysicist, professor, TED fellow, and advocate for inclusive STEM education. She is the first Black woman to receive a PhD in Astrophysics from Yale University. Jedidah is also the founder of VanguardSTEM, an online community and platform for girls, women, and non-binary people of color in STEM. 
      Jedidah’s love of astronomy and astrophysics began at an early age, and her research focuses on understanding galaxies’ supermassive black holes. Her advocacy focuses on ensuring that all people can access, contribute to, and benefit from STEM. Jedidah founded the non-profit The STEM en Route to Change (SeRCH) Foundation, Inc. to help close the equity, inclusion, and diversity gap in STEM.`,
      impact: `Jedidah has received national recognition, awards, and support for her research and advocacy in the U.S.  She has reached more than 2.5 million viewers and listeners through her TED talks and broadcast speaking engagements about STEM inclusion. As the host of her web series VanguardSTEM, 
      Jedidah gathers women and non-binary people of color in STEM to share their experiences and advice and affirm their identities. Jedidah’s work as the White House Office of Science and Technology Policy’s (OSTP) principal assistant director for science focuses on equity in Federal science & technology strategy and policy.`,
      career: `In her 2015 TED Talk, Jedidah shared about her life as a Black woman astrophysicist who had to overcome the challenges that women of color in STEM face. She highlighted accomplished women of color in STEM and encouraged underrepresented listeners to do what she and those women did: pursue their dreams in spite of the obstacles. 
      Jedidah emphasized the importance of diversity in STEM because each person’s unique perspective and experiences add value and lead to better global solutions.`,
    },
    resources: [
      {
        title: 'Website: Vanguard STEM',
        image: jediahResource1,
        link: 'https://vanguardstem.com/',
      },
      {
        title:
          'Video: TED Talk | The untapped genius that could change science for the better',
        image: jediahResource2,
        link: 'https://youtu.be/3NdSVi38RM8?si=LhJc7eAXCU55N0su',
      },
    ],
    image: Jedidah,
    tags:['BLACK', 'WOMEN']
  },
  {
    id: 5,
    name: 'Maya',
    fullName: 'Maya Ajmera',
    occupation: 'CEO of Society for Science',
    bio: {
      summary: `Maya Ajmera is a distinguished professional in the field of science, education, and nonprofit leadership. She currently serves as the CEO of the Society for Science, a renowned organization dedicated to promoting science education and research. Maya is also an accomplished author and a passionate advocate for science literacy.\n Maya's journey in the realm of science and education has been marked by her commitment to fostering a love for science among young minds. As the founder of the Global Fund for Children, she has championed initiatives that support innovative and impactful programs for children and youth around the world. `,
      career: `Maya Ajmera's journey to success has not been without its challenges, and she has faced moments of self-doubt. In her interviews and public engagements, Maya emphasizes the importance of embracing one's uniqueness and overcoming imposter syndrome. Maya encourages aspiring scientists and educators to recognize their own value and contributions. She highlights the significance of perseverance, curiosity, and a willingness to learn from failures. 
      `,
      impact: `Maya Ajmera's impact in the realm of science and education is significant. Under her leadership, the Society for Science has played a pivotal role in advancing science education globally. The organization is widely recognized for its world-renowned science competitions, such as the Intel International Science and Engineering Fair (ISEF), which provides a platform for young scientists to showcase their talents. Maya's commitment to promoting diversity and inclusion in science education is evident through the Society for Science's initiatives. She has worked tirelessly to ensure that students from all backgrounds have access to opportunities that nurture their passion for science. 
      `,
    },
    resources: [
      {
        title: 'Website: Society for Science',
        image: mayaResource1,
        link: 'https://www.societyforscience.org/',
      },
      {
        title:
          'Video: TED Talk | Why access to scientific information in schools is essential',
        image: mayaResource2,
        link: 'https://youtu.be/tXx2IrXBpsU?si=vD5R8K6j8eAiBcFH',
      },
    ],
    image: Maya,
    tags:['SOUTH ASIAN', 'WOMEN']
  },
  {
    id: 6,
    name: 'Rana',
    fullName: 'Rana Dajani',
    occupation: 'Molecular Biologist and Professor',
    bio: {
      summary: `Rana Dajani is a distinguished molecular biologist and professor recognized for her contributions to scientific research, education, and community development. With a background in molecular biology, she has played a pivotal role in advancing the understanding of genetic factors in health and disease. Rana's academic journey led her to pursue a Ph.D. in molecular biology from the University of Iowa. Her research focuses on genetics, particularly the genetics of circadian rhythms and their impact on health. Throughout her career, she has published numerous research papers, contributing significantly to the scientific community's understanding of molecular biology. `,
      career: `In various interviews and speaking engagements, Rana has shared insights into overcoming imposter syndrome. She emphasizes the importance of resilience and perseverance, recounting moments in her career when she faced challenges and doubted her abilities. Rana advocates for building a supportive network of mentors and peers who can provide guidance and encouragement during moments of self-doubt. Her message to aspiring scientists is grounded in the belief that embracing challenges, staying curious, and seeking support are crucial elements in conquering imposter syndrome.`,
      impact: `Rana's impact extends beyond her research endeavors. She is a strong advocate for science education, particularly for women in STEM. As the founder of We Love Reading, a non-profit organization, Rana promotes literacy and the love of reading among children in underserved communities. Her commitment to education and community development has earned her recognition as a leader in both scientific and humanitarian efforts. Rana's dedication to empowering women in the scientific community is evident through her initiatives and mentorship programs. By actively encouraging the participation of women in STEM fields, she has contributed to breaking down gender barriers and fostering a more inclusive scientific landscape.`,
    },
    resources: [
      {
        title:
          'Video: This hero is the Middle East winner of the UNHCR Nansen Refugee Award. Meet Rana Dajani',
        image: ranaResource1,
        link: 'https://youtu.be/LaYLqxq2kFo?si=8f3KDJH-NdhjLIIO',
      },
      {
        title:
          'Video: TED Talk | If we can reverse cell fate, why can’t we redefine success?',
        image: ranaResource2,
        link: 'https://youtu.be/duqw1Kj3wyM?si=M5S8_QQkHD_KdZu9',
      },
    ],
    image: Rana,
    tags:['MIDDLE EASTERN', 'WOMEN']
  },
  {
    id: 7,
    name: 'Nicole',
    fullName: 'Nicole Aunapu Mann',
    occupation: 'NASA Astronaut',
    bio: {
      summary: `Nicole Aunapu Mann is a NASA Astronaut, U.S. Marine Corps Colonel, and the first Indigenous woman to go to space. Mann received her Bachelor of Science from the United States Naval Academy and her Master of Science from Stanford University.\n In 2013, Nicole was selected by NASA as one of eight members for the 21st class and completed the astronaut candidate course in 2015. In 2022, Nicole spent 157 days in orbit at the International Space Station, researching life on Earth and the effects on human bodies in space.`,
      career: `Nicole has reflected on her childhood role models, noting the lack of representation compared to the Artemis team today, and she is proud to see the culture shifting for the younger generation.
       In an interview with The Stanford Daily, Nicole shared this advice: follow your dreams, make a plan to reach your goals, know that it’s okay to stumble and adapt on the way to your dreams, but never give up.
      When asked by USA Today about her definition of courage, Nicole spoke about pursuing things that feel somewhat risky. She said there’s a chance you’ll fail, but try to succeed anyway and don’t let fear stop you.`,
      impact: `Nicole’s impact on the field of space exploration is marked by her trailblazing role as one of the few women chosen to be a NASA astronaut. As a skilled pilot and astronaut, Nicole contributes to the scientific and technological advancements of space missions and also serves as an inspiration for women aspiring to enter STEM fields. 
      By pushing boundaries and challenging stereotypes, Nicole’s impact extends beyond her individual achievements, fostering a more diverse and equitable future for space exploration.`,
    },
    resources: [
      {
        title:
          'Video: Nicole Mann takes Laughter Permitted on an out-of-this-world journey to space',
        image: nicoleResource1,
        link: 'https://youtu.be/-4FuAtYWDYg?si=S8PL3YKiAmKW3g0g',
      },
      {
        title:
          'News Article: Indian Country Today | First Native woman in space',
        image: nicoleResource2,
        link: 'https://ictnews.org/news/first-native-woman-in-space',
      },
    ],
    image: Nicole,
    tags: ['WOMEN','INDIGENOUS'],
  },
  {
    id: 8,
    name: 'Melissa',
    fullName: 'Melissa Cristina Márquez',
    occupation: ' Marine Biologist',
    bio: {
      summary: `Melissa is a Latina marine biologist, wildlife educator, diversity advocate, TV host, speaker, and freelance environmental writer committed to marine conservation and empowering young Latinas in science. 
      She holds a Master of Science in Marine Biology from Victoria University of Wellington. Melissa is known as the “Mother of Sharks” and has loved the ocean and sharks since childhood. She studies Chondrichthyans (sharks, sting rays, skates, and chimeras), how the media portrays them, and how that affects conservation efforts.`,
      career: `In her Superwomen in Science interview, Melissa talked about her personal experiences with racism, sexism, and rejection and how she used these experiences and her network’s support as motivation to excel in science. She believes science is something anyone can do, regardless of their background.
      Melissa emphasized the need for support for women in STEM and their representation in leadership roles; it’s vital to retaining them and providing role models that aspiring STEM professionals can identify with.`,
      impact: `Melissa has expressed her advocacy for STEM inclusion, marine conservation, and science education through interviews, TEDx, contributions to Forbes Science, and Shark Week and other TV programming. Her podcast ConCiencia Azul highlights Spanish-speaking marine scientists and enthusiasts from around the world as well as some of the major barriers Latin American countries face.
      Melissa’s live #STEMSaturdays on X and her work with femSTEM offer career advice to women scientists Melissa founded the nonprofit The Fins United Initiative (TFUI) to provide accessible information on Chondrichthyans, dispel stigmas about them, and promote their conservation and awareness. TFUI’s Chondrichthyan education and conservation program has reached schools across 12 countries and the U.S.`,
    },
    resources: [{title:'Video: 17 Minutes of Science | Spreading diversity and inclusion in science through sharks',image:melissaResource,link:'https://youtu.be/Y7DsjYhWBy4?si=54FLBnr3qDS_X78o'},
    {title:'Video: Paseo Podcast | Shark talk with marine biologist Melissa Cristina Marquez', image:melRes , link:'https://www.youtube.com/watch?v=ScQ916PP_04'}],
    image: Melissa,
    tags: ['LATINX', 'WOMEN'],
  },
  {
    id: 9,
    name: 'Maggie',
    fullName: 'Maggie Aderin-Pocock',
    occupation: 'Space Scientist and Author',
    bio: {
      summary: ``,
      career: ``,
      impact: ``,
    },
    resources: [],
    image: Maggie,
    tags: ['BLACK', 'WOMEN', 'DISABILITY'],
  },
  {
    id: 10,
    name: 'James',
    fullName: 'James Makokis',
    occupation: 'Two-Spirit Family Physician',
    bio: {
      summary: ``,
      career: ``,
      impact: ``,
    },
    resources: [],
    image: James,
    tags: ['LGBTQ+','INDIGENOUS'],
  },
  {
    id: 11,
    name: 'Tazin',
    fullName: 'Tazin Khan',
    occupation: 'Founder of Cyber Collective',
    bio: {
      summary: ``,
      career: ``,
      impact: ``,
    },
    resources: [],
    image: Tazin,
    tags: ['ASIAN', 'WOMEN'],
  },
  {
    id: 12,
    name: 'Huda',
    fullName: 'Huda Zoghbi',
    occupation: 'Lebanese-American geneticist',
    bio: {
      summary: ``,
      career: ``,
      impact: ``,
    },
    resources: [],
    image: huda,
    tags: ['WOMEN', 'IMMIGRANT'],
   
  },
  
];
