function FooterPage() {
  return (
    <footer>
      <div className="p-20 bg-white">
        <h4 className="font-bold text-xl">Production by J</h4>
        <div className="flex flex-row">
          <p className="text-lg font-bold">TEL.</p>
          <p className="text-lg mr-4">1234-5678</p>
          <p className="text-lg font-bold">E-MAIL.</p>
          <p className="text-lg mr-4">production@gmail.co.kr</p>
        </div>
        <div className="mt-5">
          <p>서울특별시 가나다라 123-1</p>
          <p>통신판매업종신고 : 제1111-서울-123 상호:product 대표:홍길동</p>
          <p>고객센터:1234-5678 이메일:production@gmail</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterPage;
