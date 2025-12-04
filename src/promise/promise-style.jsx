import styled from "styled-components";

export const PromiseStyle = styled.div`
  width: 100%;
  padding: 60px 0;
  display: flex;
  justify-content: center;

  .promise-container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .promise-title {
    text-align: center;
    margin-bottom: 40px;
  }

  .promise-title h1 {
    font-size: 36px;
    font-weight: 700;
    color: #111;
  }

  .promise-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
  }

  .promise-item {
    background: #ffffff;
    padding: 25px;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
    transition: 0.3s ease;
  }

  .promise-item:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  }

  .icon {
    width: 80px;
    height: auto;
    margin-bottom: 15px;
  }

  .promise-item h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #222;
  }

  .promise-item p {
    font-size: 15px;
    color: #555;
    line-height: 1.5;
  }

  /* ========== RESPONSIVE ========== */

  /* Medium screens (Tablets) */
  @media (max-width: 1024px) {
    .promise-content {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    .promise-title h1 {
      font-size: 32px;
    }
  }

  /* Mobile screens */
  @media (max-width: 600px) {
    .promise-content {
      grid-template-columns: repeat(1, 1fr);
    }

    .promise-title h1 {
      font-size: 28px;
    }

    .promise-item {
      padding: 20px;
    }

    .icon {
      width: 65px;
    }
  }
`;
