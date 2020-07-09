image_version=`date +%Y%m%d%H%M`;
echo "ceshi-----"
echo $image_version;
# cd blog-vuepress
git pull --rebase origin master;
docker stop blog-vuepress;
docker rm blog-vuepress;
docker build -t blog-vuepress:$image_version .;
docker images;
docker run -p 10002:80 -d --name blog-vuepress blog-vuepress:$image_version;
# -v ~/docker-data/house-web/appsettings.json:/app/appsettings.json -v ~/docker-data/house-web/NLogFile/:/app/NLogFile   --restart=always
docker logs blog-vuepress;
#删除build过程中产生的镜像    #docker image prune -a -f
docker rmi $(docker images -f "dangling=true" -q)
