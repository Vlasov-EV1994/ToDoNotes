from python:3.8.6

RUN pip3 install --upgrade pip
COPY ./todo/ ./
RUN pip3 install -r requirements.txt

RUN pip3 install gunicorn