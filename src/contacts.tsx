import styled from "styled-components";
import { Caption, Subhead1 } from "./font-scales";
import { v4 as uuidv4 } from "uuid";
import { ContactType } from "./resume-data-type";
import { data } from "./resume-data";

const Contact = styled.span`
  font-family: "Bitter";
  font-weight: normal;
  font-size: 1.2em;
  display: flex;
  gap: 12px;
  white-space: nowrap;
  align-items: center;
`;
const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 12px 0;
  gap: 24px;
`;
const Credit = styled(Caption)`
  color: ${({ theme }) => theme.grayText};
  align-self: flex-end;
  display: inline;
  margin-left: auto;
`;

function Contacts({ contact }: { contact: ContactType[] }) {
  return (
    <ContactContainer>
      {contact.map((cont) => (
        <Contact key={uuidv4()}>
          {cont.icon && <cont.icon />}
          <Subhead1>{cont.contact}</Subhead1>
        </Contact>
      ))}
      {data.showCredit && (
        <Credit>Resume template fabricated by Stumpf Dominik.</Credit>
      )}
    </ContactContainer>
  );
}

export default Contacts;
