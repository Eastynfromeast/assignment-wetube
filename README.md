# A15 File Uploads

## Tasks

- TXT to HTML 애플리케이션을 만들어 봅시다.
- 사용자는 .txt 파일을 업로드할 수 있습니다.
- multer와 fs를 사용하여 .txt 파일을 열고, 웹사이트에 그 내용을 표시해 봅시다.

## Steps

1. 두 가지 routes를 만드세요: /와 /read
2. /는 파일을 업로드하기 위한 form을 렌더 해야 합니다.
3. form은 /read로 POST되어야 합니다.
4. .txt 파일이 /read로 POST되는 것을 허용하도록 multer를 설정하세요.
5. /read POST 핸들러에서 fs를 사용하여 파일을 열고 사용자에게 내용을 표시하세요.

## 추가 과제

- / (홈 화면)에 업로드한 모든 .txt 파일의 파일명이 표시되게 해보세요. (디렉터리에 있는 파일을 보려면 fs.readDir를 사용하면 됩니다.)
- 각 파일명에 /read/:id에 대한 링크를 걸고 파일명 클릭 시 파일의 내용이 표시되게 해보세요.

---

# A13 Users

## Tasks

제공된 blueprint로 username / password 인증 시스템을 구축하세요! 작성해야 하는 라우트(routes)는 다음과 같습니다:

- `/join` : 이 route는 계정을 만들기 위해 form을 렌더 해야 합니다. (GET, POST)
- `/login`: 이 route는 로그인하기 위해 form을 렌더 해야 합니다. (GET, POST)
- `/`: 이 route는 로그인을 했는지 안했는지 확인해야 합니다. 로그인한 경우에는 프로필이 표시되어야 하고, 로그인하지 않은 경우에는 /login으로 보내져야 합니다.
- User 모델을 완성하세요. (username, name, password)
- userController와 userRouter를 완성하세요.
- .pug 파일도 만들어야 합니다.
- 암호는 securely stored(보안 저장)되어야 합니다. bcrypt를 사용하세요.
- username은 반드시 unique해야 합니다.
- form에는 오류 (wrong password(비밀번호가 틀렸습니다.), wrong password confirmation(비밀번호가 일치하지 않습니다.), username already taken(이미 사용 중인 사용자이름입니다.))가 표시되어야 합니다.
- express-session은 이미 설정해 두었습니다.
- mvp.css도 이미 설정해 두었습니다.

---

# A11 Mongo 2 by nulnu

## Tasks

제공된 blueprint로 MongoDB를 사용하여 CRUD (Create, Read, Update, Delete)를 만드세요. 만들어야할 URL(+컨트롤러)은 다음과 같습니다.

- `/` : DB에 있는 모든 영화의 제목이 나열된 홈 페이지 (GET)
- `/upload` : 영화를 생성하는 Form이 있는 페이지 (GET), 생성한 영화를 DB에 저장 (POST)
- `/movies/:id` : 영화 상세 정보 페이지 (GET)
- `/movies/:id/edit` : 영화를 편집하는 Form이 있는 페이지 (GET), 편집한 영화를 DB에 저장 (POST)
- `/movies/:id/delete` : 영화 삭제 (GET)
- `/search` : 제목별로 영화를 검색하는 페이지 (GET)

## Requirements

- mixins, layouts, partials을 퍼그와 함께 사용하세요.
- 컨트롤러에 async/await을 사용하세요.
- mvp.css 사용하세요.
