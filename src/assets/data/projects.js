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
      name: 'Nutrival',
      desc:
        'A nutrition application that will show the nutrition values of any food item and recipe suggestions.',
      img: NutritionImg,
      url: 'https://github.com/Modsia16/Nutritional-Value',
      dep: 'https://modsia16.github.io/Nutritional-Value/'
    },
    {
      id: uuidv4(),
      name: 'Daily Scheduler',
      desc:
        'An easy to use real time daily schedule.',
      img: SchedulerImg,
      url: 'https://github.com/Modsia16/simplescheduler',
      dep: 'https://modsia16.github.io/simplescheduler/'
    },
    {
      id: uuidv4(),
      name: 'E-Commerce Backend',
      desc:
        'Backend e-commerce inventory for a clothing store.',
      img: ECommerceImg,
      url: 'https://github.com/Modsia16/e-commerce-back-end',
      dep: 'https://modsia16.github.io/e-commerce-back-end/'
    },
    {
      id: uuidv4(),
      name: 'Password Generator',
      desc:
        'Generates custom passwords up to 128 words.',
      img: PwdGen,
      url: 'https://github.com/Modsia16/neverending-password-generator',
      dep: 'https://modsia16.github.io/neverending-password-generator/'
    },
    {
      id: uuidv4(),
      name: 'Professional README Generator',
      desc:
        'Generates a README file in your CLI for any project.',
      img: ReadmeGen,
      url: 'https://github.com/Modsia16/node-readme-gen',
      dep: 'https://github.com/Modsia16/node-readme-gen/deployments/activity_log?environment=github-pages'
    },
    {
      id: uuidv4(),
      name: 'Code Quiz',
      desc:
        'Timed quiz to test your code knowledge.',
      img: quiz,
      url: 'https://github.com/Modsia16/Code-quiz',
      dep: 'https://modsia16.github.io/Code-quiz/'
    },
];

export default projects;