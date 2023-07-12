import {
  Hr,
  Img,
  Text,
  Body,
  Head,
  Html,
  Link,
  Button,
  Section,
  Container,
} from '@react-email/components';
import { Font } from '@react-email/font';
import { Tailwind } from '@react-email/tailwind';
import * as React from 'react';

const DSTEmail = () => {
  return (
    <Tailwind>
      <Html>
        <Head>
          <Font
            fontFamily="Poppins"
            fallbackFontFamily="Arial"
            webFont={{
              url: 'https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJbecnFHGPezSQ.woff2',
              format: 'woff2',
            }}
            fontWeight={400}
            fontStyle="normal"
          />
          <Font
            fontFamily="Poppins"
            fallbackFontFamily="Arial"
            webFont={{
              url: 'https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z11lFd2JQEl8qw.woff2',
              format: 'woff2',
            }}
            fontWeight={500}
            fontStyle="medium"
          />
          <Font
            fontFamily="Poppins"
            fallbackFontFamily="Arial"
            webFont={{
              url: 'https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z11lFd2JQEl8qw.woff2',
              format: 'woff2',
            }}
            fontWeight={700}
            fontStyle="bold"
          />
        </Head>
        <Body>
          <Container className="bg-white" width="600px">
            <Section
              className="px-14 pt-5 relative"
              style={{
                backgroundImage:
                  'url(https://i.ibb.co/MPS4Cdv/dst-bg-header.png)',
              }}
              width="600px"
            >
              <Img
                className="w-[104px]"
                src="https://i.ibb.co/922HPnM/dst-logo-white.png"
                alt="DST logo"
              />
              {/* <Img
                className="float-right w-[270px]"
                src="https://i.ibb.co/YRF87NC/dst-bg-logo.png"
                alt="DST bg logo"
              /> */}
              {/* <Img
                className="absolute inset-0 w-full"
                src="https://i.ibb.co/0yx6WJy/dst-bg-gradient.png"
                alt="DST bg gradient"
              /> */}
              <Section className="mt-5 bg-white px-10 pt-5 pb-2 border-x border-t border-gray-300 border-solid shadow-lg">
                <Text className="font-bold text-base text-purple-900 my-0">
                  DST Admin Portal User Invitation
                </Text>
              </Section>
            </Section>
            <Section className="px-14 pb-12 relative bg-gray-50" width="600px">
              <Section className="bg-white px-10 py-2 border-x border-b border-gray-300 border-solid shadow-lg">
                <Text className="font-bold text-xl text-gray-600 my-0">
                  <span className="font-normal">Your Verification Code:</span>{' '}
                  231956
                </Text>
                <Text className="mt-2 text-xs leading-4 text-gray-600">
                  Dear [Recipient's Name],
                </Text>
                <Text className="mt-6 text-xs leading-4 text-gray-600">
                  Warm greetings! We are delighted to extend an invitation to
                  you to join our platform and be a part of our community. To
                  join the platform kindly click on verification button below.
                </Text>
                <Button
                  className="w-full py-2.5 font-medium text-white text-center rounded-md"
                  style={{
                    backgroundImage:
                      'url(https://i.ibb.co/kcgKQnJ/dst-bg-button-1.png)',
                  }}
                  href="https://dst.com.bn/"
                >
                  Verify My Email
                </Button>
                <Hr className="my-6" />
                <Text className="text-xs mt-0 leading-4 text-gray-600">
                  As a security measure, we require an authentication code to
                  ensure a smooth and secure registration process. Please see
                  authentication code above.
                </Text>
                <Text className="mt-5 mb-0 text-xs leading-4 text-gray-600">
                  Please note that this code is unique to you and is valid for a
                  limited period of time. We recommend using it promptly to
                  complete your registration process and gain access to our
                  platform.
                </Text>
                <Text className="mt-5 mb-0 text-xs leading-4 text-gray-600">
                  If you encounter any difficulties during the registration
                  process or have any questions, please don't hesitate to reach
                  out to our support team. We are here to assist you at every
                  step.
                </Text>
                <Text className="mt-5 mb-0 text-xs leading-4 text-gray-600">
                  We look forward to welcoming you aboard and sharing the
                  benefits of our platform with you. Thank you for choosing us!
                  If you have any concerns, you can contact us through this
                  email address [support Email Address] or visit our website
                  [Website] Best regards,
                </Text>
                <Text className="mt-5 mb-0 text-xs leading-4 text-gray-600">
                  [Company Name]
                </Text>
                <Text className="text-xs mt-0 leading-4 text-gray-600">
                  [Contact Information]
                </Text>
              </Section>
              <Section className="px-10 py-2">
                <Text className="mt-6 text-xs leading-4 text-gray-600">
                  If you need to contact us you can do it through this e-mail
                  address{' '}
                  <Link className="text-black" href="mailto:support@dst.com">
                    support@dst.com
                  </Link>{' '}
                  or visit our website{' '}
                  <Link
                    className="underline text-black"
                    href="https://dst.com.bn/"
                  >
                    https://dst.com.bn/
                  </Link>
                </Text>
                <Text className="mt-8 mb-0 text-xs leading-4 text-gray-600">
                  DST All Rights Reserved.©
                </Text>
                <Text className="mt-4 text-xs leading-4 text-purple-800">
                  <Link className="text-purple-800" href="#">
                    Help centre
                  </Link>{' '}
                  ·{' '}
                  <Link className="text-purple-800" href="#">
                    Terms & Conditions
                  </Link>{' '}
                  ·{' '}
                  <Link className="text-purple-800" href="#">
                    Privacy Policy
                  </Link>
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default DSTEmail;
