import styled from 'styled-components';
import { useState, useEffect } from 'react';

import logo from '../../assets/logo.png';
import Modal from '../_common/Modal';

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5MB

const ModalInfo = {
  type: 'alert',
  text: '사진 사이즈가 맞지 않습니다. 다른 사진을 선택해주시길 바랍니다.',
  btnText1: '확인',
};

const ImgUpload = ({ edit, url, setPostImg, setEditedImg }) => {
  const [preview, setPreview] = useState(url || logo); // 이미지 파일의 url -> 미리 보기용
  const [modalYn, setModalYn] = useState(false);

  useEffect(() => {
    setPreview(url || logo); // url이 바뀌면 preview 업데이트
  }, [url]);

  const onImgUpload = (e) => {
    let img = e.target.files[0];

    if (!img) return;

    if (img && img.size > MAX_FILE_SIZE_BYTES) {
      setModalYn(true);
      return;
    }

    // 업로드 함수를 전달받았을 경우
    setPostImg?.(img);
    // 수정 함수를 전달받았을 경우
    setEditedImg?.(img);

    let fileRead = new FileReader();
    fileRead.readAsDataURL(img);

    fileRead.onload = () => {
      setPreview(fileRead.result || null);
    };
  };

  return (
    <Wrapper>
      <ImgWrapper>
        {preview && (
          <img src={preview} className={preview === logo && 'logo'} />
        )}
      </ImgWrapper>
      <Label htmlFor="photo">{edit ? '사진 수정하기' : '사진 등록하기'}</Label>
      <Upload
        type="file"
        id="photo"
        name="photo"
        accept="image/*"
        onChange={onImgUpload}
      />
      <Modal
        isOpen={modalYn}
        onClose={() => setModalYn(false)}
        {...ModalInfo}
      />
    </Wrapper>
  );
};

export default ImgUpload;

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;

  button {
    cursor: pointer;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 30vh;
  background-color: white;
  border-radius: 5px;
  border: 1px solid var(--grey);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .logo {
    width: 20%;
    max-width: 70px;
    height: auto;
    object-fit: cover;
  }
`;

const Label = styled.label`
  text-align: center;
  text-decoration: underline;
  margin-top: 5px;
  cursor: pointer;
`;

const Upload = styled.input`
  display: none;
`;
