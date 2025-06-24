"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  const apiKey = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;
  const mapRef = useRef(null);
  const [scriptLoad, setScriptLoad] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
    document.head.appendChild(script);

    const onLoadKakaoMap = () => {
      setScriptLoad(true);

      window.kakao.maps.load(() => {
        const container = mapRef.current;
        if (container) {
          const mapOption = {
            center: new window.kakao.maps.LatLng(37.4773918, 127.0377454), // 지도의 중심좌표
            level: 4, // 지도의 확대 레벨
          };
          const map = new window.kakao.maps.Map(container, mapOption);

          const markerPosition = new window.kakao.maps.LatLng(
            37.4773918,
            127.0377454,
          );
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });

          marker.setMap(map);

          const iwContent =
            '<div style="padding:5px;">나무아이앤씨<br><a href="https://map.kakao.com/link/map/나무아이앤씨,37.4773918, 127.0377454" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/나무아이앤씨,37.5167085, 127.0287715" style="color:blue" target="_blank">길찾기</a></div>';

          const iwPosition = new window.kakao.maps.LatLng(
            37.4773918,
            127.0377454,
          );

          const infowindow = new window.kakao.maps.InfoWindow({
            position: iwPosition,
            content: iwContent,
          });

          // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
          infowindow.open(map, marker);
        } else {
          setScriptLoad(false);
        }
      });
    };

    script.addEventListener("load", onLoadKakaoMap);

    return () => {
      script.removeEventListener("load", onLoadKakaoMap);
    };
  }, []);
  return (
    <div className="border shadow-lg">
      {scriptLoad ? (
        <div
          ref={mapRef}
          style={{ width: "100%" }}
          className="h-[20rem] sm:h-[25rem] lg:h-[35rem]"
        />
      ) : (
        <Image
          src={"/image/map.png"}
          alt="map"
          width={1151}
          height={560}
          className="h-[20rem] sm:h-[25rem] lg:h-[35rem]"
        />
      )}
    </div>
  );
};
export default KakaoMap;
