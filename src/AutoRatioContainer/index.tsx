import React, { useEffect, useRef, useState } from 'react';
import './index.scss';

export type Props = {
  /** 容器比例 width / height */
  ratio?: number;
  children?: any;
  parentStyle?: React.CSSProperties;
  style?: React.CSSProperties;
};

const AutoRatioContainer: React.FC<Props> = ({
  ratio = 1,
  children,
  parentStyle,
  style,
}) => {
  const boxRef = useRef<HTMLDivElement>(null);

  /** 根据比例判断以 width or height 为基准  */
  const [reference, setReference] = useState<'width' | 'height'>('width');

  // 缩放的时候根据父级对比比例
  useEffect(() => {
    if (!boxRef.current) return;
    const callback: ResizeObserverCallback = (entries) => {
      entries.forEach((item) => {
        const { width, height } = item.contentRect;
        const { width: childWidth, height: childHeight } = (item.target.firstChild as HTMLDivElement).getBoundingClientRect?.();
        setReference(() => {
           // 比例等于 1 的时候根据父元素宽高来做
           if (ratio === 1) return width > height ? 'height' : 'width';
           if ((width / height) > (childWidth / childHeight)) return 'height';
           return 'width';
        })
      });
    };
    const resizeObserver = new ResizeObserver(callback);
    resizeObserver.observe(boxRef.current);
    return () => resizeObserver.disconnect();
  }, [ratio]);

  return (
    <div className='auto-ratio-container' style={parentStyle} ref={boxRef}>
      <div
        className='auto-ratio-box'
        style={{
          ...(style ?? {}),
          aspectRatio: `${ratio}`,
          [reference]: '100%',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AutoRatioContainer;
