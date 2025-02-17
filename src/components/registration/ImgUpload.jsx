import styled from 'styled-components';
import { useState, useEffect } from 'react';

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5MB

const ImgUpload = ({ edit, url, setPostImg, setEditedImg }) => {
  const [preview, setPreview] = useState(url); // 이미지 파일의 url -> 미리 보기용

  useEffect(() => {
    setPreview(url); // url이 바뀌면 preview 업데이트
  }, [url]);

  const onImgUpload = (e) => {
    let img = e.target.files[0];

    if (!img) return;

    if (img && img.size > MAX_FILE_SIZE_BYTES) {
      alert('사진 크기가 너무 큽니다. 5MB 이하의 사진을 선택해주세요.');
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
      <ImgWrapper>{preview && <img src={preview} />}</ImgWrapper>
      <Label htmlFor="photo">{edit ? '사진 수정하기' : '사진 등록하기'}</Label>
      <Upload
        type="file"
        id="photo"
        name="photo"
        accept="image/*"
        onChange={onImgUpload}
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

  img {
    display: block;
    width: 100%;
    height: 100%;
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
