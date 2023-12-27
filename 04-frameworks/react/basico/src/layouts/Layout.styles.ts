import { css } from '@emotion/css'
import background from '@/assets/background.png'

export const layout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

export const specialLayout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-image: url(${background});
`

export const header = css`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  @media (max-width: 500px) {
    font-size: 13px;
  }
`

export const clickable = css`
  cursor: pointer;
  @media (max-width: 500px) {
    svg {
      width: 60px;
    }
  }
`
