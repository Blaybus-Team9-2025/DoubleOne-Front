import { useParams } from 'react-router-dom';
import Card from '../components/_common/Card';
import Header from '../components/_common/Header';
import ContactList from '../components/contact/ContactList';

const Contact = () => {
  const params = useParams();
  const { id } = params;

  return (
    <div style={{ marginTop: '100px' }}>
      <Header title="매칭" />
      <Card bg="green">
        <p>김ㅇㅇ 어르신, 67세</p>
        <p>서울시 관악구 대학동</p>
        <p>현재 3명 매칭중</p>
      </Card>
      <ContactList id={id} />
    </div>
  );
};

export default Contact;
