'use client';

import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';
import { useRef, useState } from 'react';
import MainBackGround from './_components/main-back-ground';

export default function Home() {
  const [expandOnContentDrag, setExpandOnContentDrag] = useState(true);
  const focusRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<BottomSheetRef>(null);
  return (
    <>
      <MainBackGround />
      <BottomSheet
        open={expandOnContentDrag}
        skipInitialTransition
        sibling={<div className="z-10">Close Example</div>}
        ref={sheetRef}
        initialFocusRef={focusRef}
        defaultSnap={({ maxHeight }) => maxHeight * 0}
        snapPoints={({ maxHeight }) => [maxHeight - maxHeight / 10, maxHeight / 4, maxHeight * 0.6]}
        expandOnContentDrag={expandOnContentDrag}
      >
        <button className="text-black" onClick={() => setExpandOnContentDrag(false)}>
          닫기
        </button>
        dadasd``
      </BottomSheet>
      <button className="absolute bg-white bottom-3" onClick={() => setExpandOnContentDrag(true)}>
        Open
      </button>
    </>
  );
}
