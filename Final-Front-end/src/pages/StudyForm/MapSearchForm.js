import React, { useEffect, useState, useRef } from "react";
import useInput from "../../hooks/useInput";

const MapSearchForm = ({
  address,
  setAddress,
  setAddressLat,
  setAddressLng,
  addressConfirmed,
  setAddressConfirmed,
}) => {
  // html 선택자
  const container = useRef();
  //카카오 맵 객체
  const [kakaoMap, setKakaoMap] = useState(null);
  //장소 검색 객체
  const [kakaoPs, setKakaoPs] = useState(null);
  //인포윈도우
  const [infoWindow, setInfoWindow] = useState(null);
  // 검색어
  const [searchText, onChangeSearchTest] = useInput("");
  // markers
  const [markers, setMarkers] = useState([]);

  /**
   * ============== 초기 필요한 모듈을 세팅해준다~
   */
  useEffect(() => {
    const center = new kakao.maps.LatLng(37.50802, 127.062835); // 초기 지도 센터값 세팅은 아무데로나 했음
    const options = {
      center,
      level: 3,
    };
    const map = new kakao.maps.Map(container.current, options);

    //여기가 돔에 세팅하는 단
    setKakaoMap(map);
    // setMarkerPosition(markerPosition);
    const ps = new kakao.maps.services.Places();
    setKakaoPs(ps);
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    setInfoWindow(infowindow);
  }, [container]);

  /**
   * ================= 지도 센터값 세팅
   */
  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }

    // save center position
    const center = kakaoMap.getCenter();

    // change viewport size
    container.current.style.width = `100%`;
    container.current.style.height = `${300}px`;

    // relayout and...
    kakaoMap.relayout();
    // restore
    kakaoMap.setCenter(center);
  }, [kakaoMap]);

  const onClickSearchButton = () => {
    // setAddress(searchText);
    if (kakaoPs == null) {
      return;
    }
    kakaoPs.keywordSearch(searchText, placeSearchCB);
  };
  const placeSearchCB = (data, status, pagination) => {
    if (status === kakao.maps.services.Status.OK) {
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      var bounds = new kakao.maps.LatLngBounds();
      //마커 초기화부터 진행
      markers.map((x) => x.setMap(null));
      const tempArr = [];
      for (var i = 0; i < data.length; i++) {
        const newMarker = displayMarker(data[i]);
        tempArr.push(newMarker);
        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
      }
      setMarkers(tempArr);
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      kakaoMap.setBounds(bounds);
    }
  };
  const displayMarker = (place) => {
    let marker = null;
    if (!!kakaoMap) {
      marker = new kakao.maps.Marker({
        map: kakaoMap,
        position: new kakao.maps.LatLng(place.y, place.x),
      });
      //마커에 클릭 이벤트를 등록한다.
      kakao.maps.event.addListener(marker, "click", function () {
        // console.log(place.address_name, place.id);
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        setAddress(`${place.address_name} ${place.place_name}`);

        setAddressLng(place.x); // longitude : 경도, x값
        setAddressLat(place.y); // latitude : 위도, y값

        infoWindow.setContent(
          `<div style="padding:5px;font-size:12px;cursor:pointer;" > ${place.place_name} </div>`
        );
        infoWindow.open(kakaoMap, marker);
      });
    }
    return marker;
  };
  const onClickAddressConfirm = () => {
    const isConfirmed = confirm("이 장소로 결정하시겠습니까?");
    if (isConfirmed) {
      setAddressConfirmed(true);
    }
  };
  return (
    <>
      <div className="flex w-full">
        <input
          placeholder="오프라인 스터디를 진행할 장소를 검색해주세요."
          className="appearance-none block w-80 bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
          required="required"
          type="text"
          value={searchText}
          onChange={onChangeSearchTest}
          readOnly={addressConfirmed}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          onClick={onClickSearchButton}
          className="mb-2 md:mb-0 bg-primary px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:io"
        >
          search
        </button>
        {address.length > 0 && (
          <button
            onClick={onClickAddressConfirm}
            className="mb-2 md:mb-0 bg-primary px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:io"
          >
            결정하기
          </button>
        )}
      </div>
      <div id="container" ref={container} />
    </>
  );
};

export default MapSearchForm;
