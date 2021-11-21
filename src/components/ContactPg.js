import React from 'react';
import styled from 'styled-components';
import { MdLocalPhone, MdEmail } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactItems from './ContactItems';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  color: var(--blue);
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .right {
    max-width: 1000px;
    width: 100%;
    border-radius: 10px;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactPg() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="how to reach me" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactItems icon={<MdLocalPhone />} text="Phone"/>
            </div>
          <div className="left">
            <ContactItems icon={<MdEmail />} text="Email"/>
            </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
