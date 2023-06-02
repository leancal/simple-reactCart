import netherlandsRecruiter from './4e34c89a-ee58-410f-9ae6-cf5574cb44c8 (1).jpg';
import * as S from './style';

const Recruiter = () => (
  <S.Container>
    <S.Thumbnail>
      <img
        alt="Jeremy Akeze - Doghouse IT Recruitment"
        src={netherlandsRecruiter}
      />
    </S.Thumbnail>
    <S.Description>
      <h4>
        Work in Argentina
        
      </h4>
      <p>
         I'm Leandro Calvet, a full stack developer, and you can contact me on my Linkedin,{' '}
        <a href="https://www.linkedin.com/in/leandrocalvet/">
          <b>follow me on Linkedin.</b>
        </a>
      </p>
    </S.Description>
  </S.Container>
);

export default Recruiter;
