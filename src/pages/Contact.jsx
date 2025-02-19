import { useParams } from 'react-router-dom';
import Card from '../components/_common/Card';
import Header from '../components/_common/Header';
import ContactList from '../components/contact/ContactList';
import { contactListType } from '../util/dataTypes';
import { useEffect, useState } from 'react';
import { getMatchingWorkers } from '../api/senior';
import { useAtomValue } from 'jotai';
import { IdAtom } from '../jotai/Id';
import DetailModal from '../components/detailmodal/DetailModal';

const Contact = () => {
  const params = useParams();
  const { seniorId } = params;
  const idData = useAtomValue(IdAtom);

  const [data, setData] = useState(contactListType);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await getMatchingWorkers(idData.seniorConditionId);
      if (res?.data) {
        console.log(res.data);
        setData(res.data);
      }
    };

    if (idData.seniorConditionId > 0) {
      getData();
    }
  }, [idData]);

  return (
    <div style={{ marginTop: '100px' }}>
      <Header title="매칭" />
      <Card
        bg="green"
        profile={data.profileImg}
        onClick={() => setIsModalOpen(true)}
      >
        <p>
          {data.seniorName} 어르신, {data.age}세
        </p>
        <p>{data.seniorAddress}</p>
      </Card>
      <ContactList seniorId={seniorId} data={data.workers} />
      <DetailModal
        type={'recruiting'}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Contact;
