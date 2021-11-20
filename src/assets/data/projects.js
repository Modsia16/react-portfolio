import { v4 as uuidv4 } from 'uuid';
import NutritionImg from '../images/Nutrition-app.png';
import SchedulerImg from '../images/scheduler.png';
import ECommerceImg from '../images/ecommerce.jpg';
import PwdGen from '../images/pwd-gen.png';
import ReadmeGen from '../images/readmehw.jpg';
import quiz from '../images/quiz.png';


const projects = [
    {
      id: uuidv4(),
      name: 'Freshcapade',
      desc:
        'A nutrition application that will show the nutrition values of any food item and recipe suggestions.',
      img: NutritionImg,
    },
    {
      id: uuidv4(),
      name: 'Daily Scheduler',
      desc:
        'An easy to use real time daily schedule.',
      img: SchedulerImg,
    },
    {
      id: uuidv4(),
      name: 'E-Commerce Backend',
      desc:
        'Backend e-commerce inventory for a clothing store.',
      img: ECommerceImg,
    },
    {
      id: uuidv4(),
      name: 'Password Generator',
      desc:
        'Generates custom passwords up to 128 words.',
      img: PwdGen,
    },
    {
      id: uuidv4(),
      name: 'Professional README Generator',
      desc:
        'Generates a README file in your CLI for any project.',
      img: ReadmeGen,
    },
    {
      id: uuidv4(),
      name: 'Code Quiz',
      desc:
        'Timed quiz to test your code knowledge.',
      img: quiz,
    },
];

export default projects;