import React from 'react';


const Style = {
    notFound:{
        width: '100%',
        height: '100vh',
        fontSize: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
};

function App() {
    return (
        <div style={Style.notFound}>
            Dashboard
        </div>
    );
}

export default App;
