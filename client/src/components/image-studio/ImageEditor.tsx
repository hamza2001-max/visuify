import { PinturaEditor } from '@pqina/react-pintura';
import { getEditorDefaults } from '@pqina/pintura';
import { useState } from 'react';

import '@pqina/pintura/pintura.css';

const ImageEditor = () => {
  const [inlineResult, setInlineResult] = useState<string | undefined>();
    
  return (
      <div style={{ height: '80vh' }}>
          <PinturaEditor
              {...getEditorDefaults()}
              src="vite.svg"
              onProcess={(res) =>
                  setInlineResult(URL.createObjectURL(res.dest))
              }
          />

          {inlineResult}
          {inlineResult && <img src={inlineResult} alt="Processed result" />}
      </div>
  );
}

export default ImageEditor