import React from "react";

const GlobalContext = React.createContext({
  color: {
    def: '#7B61FF',
    def_mute: '#F6F4FF',
    gray: '#979797',
    black: '#161414',
    pupple: '#9747FF',
    white: '#ffffff',
  },
  font: {
    fs1: '32px',
    fs2: '24px',
    fs3: '18px',
    fs4: '16px',
    fs5: '14px'
  }
})

export default GlobalContext;