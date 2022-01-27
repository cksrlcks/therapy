import styled from "styled-components";
export default function Home() {
    return (
        <div className="wrap">
            <DocumentInner>
                <NameCard>감각운동심리치료사 조성호</NameCard>
                <ContactButton href="https://line.me/R/ti/p/waterweb1">
                    라인
                </ContactButton>
            </DocumentInner>
        </div>
    );
}
const DocumentInner = styled.div`
    max-width: 120rem;
    margin: 20rem auto;
`;

const NameCard = styled.div`
    text-align: center;
    margin-bottom: 2em;
    font-size: 1.8rem;
    opacity: 0.8;
    letter-spacing: -0.04em;
`;
const ContactButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 24rem;
    height: 5rem;
    background: #50cfa7;
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
    margin: 0 auto;
`;
