// LOCAL IMPORTS
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
import maggieResource1 from './images/resources/maggie1.jpeg';
import maggieResource2 from './images/resources/maggie2.jpg';
import jamesResource1 from './images/resources/james1.jpeg';
import jamesResource2 from './images/resources/james2.jpeg';

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
    tags:['ASIAN','WOMEN']
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
      summary: ``,
      career: ``,
      impact: ``,
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
      summary: ``,
      career: ``,
      impact: ``,
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
    tags:['ASIAN', 'WOMEN']
  },
  {
    id: 6,
    name: 'Rana',
    fullName: 'Rana Dajani',
    occupation: 'Molecular Biologist and Professor',
    bio: {
      summary: ``,
      career: ``,
      impact: ``,
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
    tags:['ASIAN', 'WOMEN']
  },
  {
    id: 7,
    name: 'Nicole',
    fullName: 'Nicole Aunapu Mann',
    occupation: 'NASA Astronaut',
    bio: {
      summary: ``,
      career: ``,
      impact: ``,
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
    tags: ['WOMEN'],
  },
  {
    id: 8,
    name: 'Melissa',
    fullName: 'Melissa Cristina Márquez',
    occupation: ' Marine Biologist',
    bio: {
      summary: ``,
      career: ``,
      impact: ``,
    },
    resources: [],
    image: Melissa,
    tags: ['LATIN', 'WOMEN'],
  },
  {
    id: 9,
    name: 'Maggie',
    fullName: 'Dr. Maggie Aderin-Pocock',
    occupation: 'Space Scientist, Science Educator, and Author',
    bio: {
      summary: `Dr. Maggie Aderin-Pocock's journey in science is a testament to the unique perspectives offered by dyslexic thinking. Attending 13 different schools, she was often underestimated, yet her distinctive way of thinking led her to extraordinary achievements, including working on the James Webb Space Telescope. Her story is a powerful narrative about the value of embracing different ways of thinking and dreaming big.`,
      career: `Dr. Aderin-Pocock has made remarkable contributions in various capacities. As the host of the BBC's "The Sky at Night," she has brought complex astronomical concepts to a broad audience. She is also an accomplished author, having written several books that make space science accessible and engaging. In addition to these roles, she serves as the Chancellor of the University of Leicester, showcasing her commitment to educational leadership and her expertise in the field of space science. From her engagement in groundbreaking projects like the James Webb Space Telescope to her role as a science communicator, she challenges conventional perceptions of scientists. Her approach to science blends her passion with a commitment to making it accessible and inclusive for all.`,
      impact: `Maggie is not just a space scientist; she is a vocal advocate for diversity in her field. Her work goes beyond the confines of traditional science to include exploring the history of astronomy from non-western perspectives. By championing diversity, she brings fresh viewpoints to science, illustrating the importance of including diverse voices in understanding our universe.`,
    },
    resources: [
      {
        title:
          'Video: Dr. Maggie Aderin-Pocock on How to think outside the planet',
        image: maggieResource1,
        link: 'https://www.youtube.com/watch?v=Tx4oCxtX2YE',
      },
      {
        title:
          'Interview: The Guardian | The Art of Stargazing',
        image: maggieResource2,
        link: 'https://www.theguardian.com/science/2023/oct/29/dr-maggie-aderin-pocock-interview-the-art-of-stargazing',
      },
    ],
    image: Maggie,
    tags: ['BLACK', 'WOMEN', 'DISABILITY'],
  },
  {
    id: 10,
    name: 'James',
    fullName: 'Dr. James Makokis',
    occupation: 'Family Physician & Clinical Professor',
    bio: {
      summary: `Dr. James Makokis is a Two-Spirit family physician from the Saddle Lake Cree Nation. Despite facing significant challenges, including the lack of Indigenous representation in medicine, Dr. Makokis was inspired by his family and community from an early age. He navigated his path to medicine while embracing his Two-Spirit identity and overcoming the environments that were not conducive to his academic goals. His journey to medicine was also intertwined with his personal journey of accepting and expressing his Two-Spirit identity.`,
      career: `Alongside his role as a family physician, Dr. Makokis serves as an Associate Clinical Professor in the Faculty of Medicine at the University of Alberta. He is dedicated to caring for Indigiqueer patients and is a prominent voice in advocating for health issues specific to Indigenous Two-Spirit and transgender communities. His contributions to medicine extend beyond clinical care to education and advocacy, striving to improve the healthcare system's responsiveness to the unique needs of these communities.`,
      impact: `Dr. Makokis is renowned for his work in Indigenous LGBTQ2S+ healthcare. As an advocate for Indigenous Two-Spirit and transgender health both nationally and internationally, he has made a significant impact. His approach to healthcare combines Indigenous and Western teachings, focusing on providing a safe and affirming space for Indigiqueer patients. Dr. Makokis emphasizes the importance of representation in medicine, particularly for Indigiqueer individuals, and he actively works to provide gender-affirming care, which he considers life-saving.`,
    },
    resources: [
      {
        title:
          'Video: AJ+ | Trans And Native: Meet The Indigenous Doctor Giving Them Hope',
        image: jamesResource1,
        link: 'https://www.youtube.com/watch?v=MSnvtj0G3cA',
      },
      {
        title:
          'Interview: Forbes | A Nehiyô Two-Spirit Physician’s Reflections On Providing Indigenous Interventions In Modern Medicine',
        image: jamesResource2,
        link: 'https://www.forbes.com/sites/victorlopez-carmen/2023/04/27/a-nehiy-two-spirit-physicians-reflections-on-providing-indigenous-interventions-in-modern-medicine/?sh=eb5916a37da1',
      },
    ],
    image: James,
    tags: ['LGBTQ+', 'INDIGENOUS'],
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
