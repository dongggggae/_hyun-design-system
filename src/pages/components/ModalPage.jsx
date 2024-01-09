import { useState, lazy, Suspense } from 'react';

import Btn from '@/components/hyun-design-system/button/Button';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@/components/hyun-design-system/modal';
import Heading from '@/components/hyun-design-system/typography/Heading';
import Text from '@/components/hyun-design-system/typography/Text';

const LazyCodeContainer = lazy(() => import('@/components/docs/CodeContainer'));

const ModalPage = () => {
  const [modals, setModals] = useState({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false,
  });

  const handleShow = (modalKey) => {
    setModals((prevModals) => ({ ...prevModals, [modalKey]: true }));
  };

  const handleClose = (modalKey) => {
    setModals((prevModals) => ({ ...prevModals, [modalKey]: false }));
  };

  return (
    <div className="docs">
      <div className="docs-table">
        <div className="component-content">
          <Heading as="h2" size="2" text="1. 개요" />
          <Text>Modal 컴포넌트를 통해 기존 화면 위에 모달을 생성합니다.</Text>
          <div className="preview">
            <Btn onClick={() => handleShow('modal1')} text="Default Modal" />
            <Modal show={modals.modal1} onHide={() => handleClose('modal1')} modalKey={'modal1'}>
              <ModalHeader title={'Modal Title1'} />
              <ModalBody>Modal Body1</ModalBody>
              <ModalFooter>
                <Btn type={'outline-gray'} text={'Button1'} onClick={() => handleClose('modal1')} />
                <Btn type={'solid-red'} text={'Button2'} onClick={() => handleClose('modal1')} />
              </ModalFooter>
            </Modal>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={ModalCode.overview} />
          </Suspense>
        </div>

        <div className="component-content">
          <Heading as="h2" size="2" text="2. 닫기 버튼" />
          <Text>
            close 프로퍼티를 통해 Modal Header 컴포넌트의 닫기 버튼 유무를 설정합니다. 기본 값은 &#39;false&#39; 입니다.
          </Text>
          <div className="preview">
            <Btn onClick={() => handleShow('modal2')} text="Close Modal" />
            <Modal show={modals.modal2} onHide={() => handleClose('modal2')} modalKey={'modal2'}>
              <ModalHeader title={'Modal Title1'} close />
              <ModalBody>Modal Body1</ModalBody>
              <ModalFooter>
                <Btn type={'outline-gray'} text={'Button1'} onClick={() => handleClose('modal2')} />
                <Btn type={'solid-red'} text={'Button2'} onClick={() => handleClose('modal2')} />
              </ModalFooter>
            </Modal>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={ModalCode.closeButton} />
          </Suspense>
        </div>

        <div className="component-content">
          <Heading as="h2" size="2" text="3. Type" />
          <Text>
            type 프로퍼티를 통해 Modal의 스타일을 설정합니다.
            <br />
            type 프로퍼티 속성은 &#39;center&#39;, &#39;scrollable&#39;, &#39;fullscreen&#39; 가 있습니다.
          </Text>
          <div className="preview">
            <Btn onClick={() => handleShow('modal3')} text="Default Modal" />
            <Modal show={modals.modal3} onHide={() => handleClose('modal3')} modalKey={'modal3'}>
              <ModalHeader title={'Modal Title1'} />
              <ModalBody>Modal Body1</ModalBody>
              <ModalFooter>
                <Btn type={'outline-gray'} text={'Button1'} onClick={() => handleClose('modal3')} />
                <Btn type={'solid-red'} text={'Button2'} onClick={() => handleClose('modal3')} />
              </ModalFooter>
            </Modal>
            <Btn onClick={() => handleShow('modal4')} text="Centered Modal" />
            <Modal show={modals.modal4} onHide={() => handleClose('modal4')} modalKey={'modal4'} type={'center'}>
              <ModalHeader title={'Modal Title1'} />
              <ModalBody>Modal Body1</ModalBody>
              <ModalFooter>
                <Btn type={'outline-gray'} text={'Button1'} onClick={() => handleClose('modal4')} />
                <Btn type={'solid-red'} text={'Button2'} onClick={() => handleClose('modal4')} />
              </ModalFooter>
            </Modal>
            <Btn onClick={() => handleShow('modal5')} text="Scrollable Modal" />
            <Modal show={modals.modal5} onHide={() => handleClose('modal5')} modalKey={'modal5'} type={'scrollable'}>
              <ModalHeader title={'Modal Title1'} />
              <ModalBody>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos quisquam libero animi
                minus et fuga tenetur incidunt iste ad hic voluptas ipsum, recusandae exercitationem sequi, commodi
                odio, ipsam tempora.
                <br />
                <br />
                <br />
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos quisquam libero animi
                minus et fuga tenetur incidunt iste ad hic voluptas ipsum, recusandae exercitationem sequi, commodi
                odio, ipsam tempora.
                <br />
                <br />
                <br />
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos quisquam libero animi
                minus et fuga tenetur incidunt iste ad hic voluptas ipsum, recusandae exercitationem sequi, commodi
                odio, ipsam tempora.
                <br />
                <br />
                <br />
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos quisquam libero animi
                minus et fuga tenetur incidunt iste ad hic voluptas ipsum, recusandae exercitationem sequi, commodi
                odio, ipsam tempora.
                <br />
                <br />
                <br />
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos quisquam libero animi
                minus et fuga tenetur incidunt iste ad hic voluptas ipsum, recusandae exercitationem sequi, commodi
                odio, ipsam tempora.
                <br />
                <br />
                <br />
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos quisquam libero animi
                minus et fuga tenetur incidunt iste ad hic voluptas ipsum, recusandae exercitationem sequi, commodi
                odio, ipsam tempora.
                <br />
                <br />
                <br />
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos quisquam libero animi
                minus et fuga tenetur incidunt iste ad hic voluptas ipsum, recusandae exercitationem sequi, commodi
                odio, ipsam tempora.
                <br />
                <br />
                <br />
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos quisquam libero animi
                minus et fuga tenetur incidunt iste ad hic voluptas ipsum, recusandae exercitationem sequi, commodi
                odio, ipsam tempora.
                <br />
                <br />
                <br />
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos quisquam libero animi
                minus et fuga tenetur incidunt iste ad hic voluptas ipsum, recusandae exercitationem sequi, commodi
                odio, ipsam tempora.
                <br />
                <br />
                <br />
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos quisquam libero animi
                minus et fuga tenetur incidunt iste ad hic voluptas ipsum, recusandae exercitationem sequi, commodi
                odio, ipsam tempora.
                <br />
                <br />
                <br />
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos quisquam libero animi
                minus et fuga tenetur incidunt iste ad hic voluptas ipsum, recusandae exercitationem sequi, commodi
                odio, ipsam tempora.
              </ModalBody>
              <ModalFooter>
                <Btn type={'outline-gray'} text={'Button1'} onClick={() => handleClose('modal5')} />
                <Btn type={'solid-red'} text={'Button2'} onClick={() => handleClose('modal5')} />
              </ModalFooter>
            </Modal>
            <Btn onClick={() => handleShow('modal6')} text="Fullscreen Modal" />
            <Modal show={modals.modal6} onHide={() => handleClose('modal6')} modalKey={'modal6'} type={'fullscreen'}>
              <ModalHeader title={'Modal Title1'} />
              <ModalBody>Modal Body1</ModalBody>
              <ModalFooter>
                <Btn type={'outline-gray'} text={'Button1'} onClick={() => handleClose('modal6')} />
                <Btn type={'solid-red'} text={'Button2'} onClick={() => handleClose('modal6')} />
              </ModalFooter>
            </Modal>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={ModalCode.type} />
          </Suspense>
        </div>

        <div className="component-content">
          <Heading as="h2" size="2" text="4. size" />
          <Text>
            size 프로퍼티를 통해 Modal의 크기를 설정합니다. 기본값은 &#39;md&#39; 입니다.
            <br />
            type 프로퍼티 속성은 &#39;sm&#39;, &#39;md&#39;, &#39;lg&#39; 가 있습니다.
          </Text>
          <div className="preview">
            <Btn onClick={() => handleShow('modal7')} text="Small Modal" />
            <Modal show={modals.modal7} onHide={() => handleClose('modal7')} modalKey={'modal7'} size={'sm'}>
              <ModalHeader title={'Modal Title1'} />
              <ModalBody>Modal Body1</ModalBody>
              <ModalFooter>
                <Btn type={'outline-gray'} text={'Button1'} onClick={() => handleClose('modal7')} />
                <Btn type={'solid-red'} text={'Button2'} onClick={() => handleClose('modal7')} />
              </ModalFooter>
            </Modal>
            <Btn onClick={() => handleShow('modal8')} text="Medium Modal" />
            <Modal show={modals.modal8} onHide={() => handleClose('modal8')} modalKey={'modal8'}>
              <ModalHeader title={'Modal Title1'} />
              <ModalBody>Modal Body1</ModalBody>
              <ModalFooter>
                <Btn type={'outline-gray'} text={'Button1'} onClick={() => handleClose('modal8')} />
                <Btn type={'solid-red'} text={'Button2'} onClick={() => handleClose('modal8')} />
              </ModalFooter>
            </Modal>
            <Btn onClick={() => handleShow('modal9')} text="Large Modal" />
            <Modal show={modals.modal9} onHide={() => handleClose('modal9')} modalKey={'modal9'} size={'lg'}>
              <ModalHeader title={'Modal Title1'} />
              <ModalBody>Modal Body1</ModalBody>
              <ModalFooter>
                <Btn type={'outline-gray'} text={'Button1'} onClick={() => handleClose('modal9')} />
                <Btn type={'solid-red'} text={'Button2'} onClick={() => handleClose('modal9')} />
              </ModalFooter>
            </Modal>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={ModalCode.size} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

const ModalCode = {
  overview: [
    `<!-- Default Modal -->`,
    `const [modals, setModals] = useState({`,
    `  modal1: false,`,
    `});`,
    ``,
    `const handleShow = (modalKey) => {`,
    `  setModals((prevModals) => ({ ...prevModals, [modalKey]: true }));`,
    `};`,
    ``,
    `const handleClose = (modalKey) => {`,
    ` setModals((prevModals) => ({ ...prevModals, [modalKey]: false }));`,
    `};`,
    ``,
    `<Btn onClick={() => handleShow('modal1')} text="Default Modal" />`,
    `<Modal show={modals.modal1} onHide={() => handleClose('modal1')} modalKey={'modal1'}>`,
    ` <ModalHeader title={'Modal Title1'} />`,
    ` <ModalBody>Modal Body1</ModalBody>`,
    ` <ModalFooter>`,
    `   <Btn type={'outline-gray'} text={'Button1'} onClick={() => handleClose('modal1')} />`,
    `   <Btn type={'solid-red'} text={'Button2'} onClick={() => handleClose('modal1')} />`,
    ` </ModalFooter>`,
    `</Modal>`,
  ].join(`\n`),
  closeButton: [
    `<!-- Default Modal -->`,
    `// ...`,
    `<Btn onClick={() => handleShow('modal2')} text="Default Modal" />`,
    `<Modal ... close>`,
    `// ...`,
    `</Modal>`,
  ].join(`\n`),
  type: [
    `<!-- Default Modal -->`,
    `// ...`,
    `<Btn onClick={() => handleShow('modal3')} text="Default Modal" />`,
    `<Modal ...>`,
    `// ...`,
    `</Modal>`,
    ``,
    `<!-- Centered Modal -->`,
    `// ...`,
    `<Btn onClick={() => handleShow('modal4')} text="Centered Modal" />`,
    `// ...`,
    `<Modal ... type={'center'}>`,
    `// ...`,
    `</Modal>`,
    ``,
    `<!-- Scrollable Modal -->`,
    `// ...`,
    `<Btn onClick={() => handleShow('modal5')} text="Scrollable Modal" />`,
    `<Modal ... type={'scrollable'}>`,
    `// ...`,
    `</Modal>`,
    ``,
    `<!-- Fullscreen Modal -->`,
    `// ...`,
    `<Btn onClick={() => handleShow('modal6')} text="Fullscreen Modal" />`,
    `<Modal ... type={'fullscreen'}>`,
    `// ...`,
    `</Modal>`,
  ].join(`\n`),
  size: [
    `<!-- Small Modal -->`,
    `// ...`,
    `<Btn onClick={() => handleShow('modal7')} text="Small Modal" />`,
    `// ...`,
    `<Modal ... size={'sm'}>`,
    `// ...`,
    `</Modal>`,
    ``,
    `<!-- Medium Modal -->`,
    `// ...`,
    `<Btn onClick={() => handleShow('modal8')} text="Medium Modal" />`,
    `<Modal ...>`,
    `// ...`,
    `</Modal>`,
    ``,
    `<!-- Large Modal -->`,
    `// ...`,
    `<Btn onClick={() => handleShow('modal9')} text="Large Modal" />`,
    `<Modal ... size={'lg'}>`,
    `// ...`,
    `</Modal>`,
  ].join(`\n`),
};

export default ModalPage;
