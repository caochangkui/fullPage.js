$(document).ready(function(){ 
	//������ 
	$("#fullpage").fullpage({ 
		  //����Ϊÿһ��section����background-color���� 
		  sectionsColor:['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'], 
			
		  //�����Ƿ�ͨ����ͷ������slide�õ�Ƭ��Ĭ��Ϊtrue������������Ϊfalse����õ�Ƭ��������ļ�ͷ�ͻ���ʧ�����ƶ��豸�ϣ����ǿ���ͨ�������������õ�Ƭ 
		  controlArrows:true, 
			
		  //ÿһҳ�������Ƿ�ֱ����,Ĭ��Ϊtrue.һ�㱣��Ĭ��ֵ 
		  verticalCentered:true, 
			
		  //�����ٶȣ���λΪ���룬Ĭ��Ϊ700 
		  scrollingSpeed:1000, 
			
		  //����ê���ӣ�Ĭ��Ϊ[]������ê���ӣ��û��Ϳ��Կ��ٴ򿪶�λ��ĳһҳ�� 
		  //ע�ⶨ��ê���ӵ�ʱ��ֵ��Ҫ��ҳ���������id��name��ͬ����������IE������¡����Ҷ���ʱ����ҪҪ��# 
		  anchors:["page1","page2","page3","page4"], 
			
		  //�Ƿ�����ê���ӣ�Ĭ��Ϊfalse���������Ϊtrue����ô�����ê���ӣ�Ҳ����anchors������û��Ч�������������ʹ�õıȽ��� 
		  lockAnchors:false, 
			
		  //����ҳ��section�����Ķ�����ʽ,����޸Ĵ���,��Ҫ����jquery.easings���������jquery ui ,�ο�http://www.runoob.com/jqueryui/api-easings.html
		  easing:"easeInOutCubic", 
			
		  //�Ƿ�ʹ��CSS3 transforms ��ʵ�ֹ���Ч����Ĭ��Ϊtrue�����������������֧��css3��������������ƶ��豸�ȵ��ٶȣ�����������֧��css3�����ʹ��jquery�����css3ʵ�ֹ���Ч�� 
		  css3:true, 
			
		  //������������Ƿ������������ײ���Ĭ��Ϊfalse 
		  loopTop:false, 
			
		  //��������ײ��Ƿ����������ض�����Ĭ��Ϊfalse 
		  loopBottom:false, 
			
		  //����slider�õ�Ƭ�Ƿ�ѭ��������Ĭ��Ϊtrue 
		  loopHorizontal:true, 
			
		  //�Ƿ�ʹ�ò���Ĺ�����ʽ��Ĭ��Ϊtrue�����ѡ��false��������������Դ��Ĺ������������ᰴҳ���������ǰ��չ�������Ĭ����Ϊ������ 
		  autoScrolling:true, 
			
		  //�Ƿ������������Ĭ��Ϊfalse���������Ϊtrue����������Դ��Ĺ��������֣�ҳ�����ʱ���ǰ�ҳ���������ǹ�������Ĭ����ΪҲ��Ч 
		  scrollBar:false, 
			
		  //����ÿһ��section�����͵ײ���padding��Ĭ��Ϊ0��һ�������Ҫ����һ���̶��������ߵײ��Ĳ˵���������Ԫ�صȣ�����ʹ�������������� 
		  paddingTop:0, 
		  paddingBottom:0, 
			
		  //�̶���Ԫ�أ�Ĭ��Ϊnull����Ҫ����һ��jqueryѡ��������ҳ�������ʱ��fixedElements���õ�Ԫ�ع̶����� 
		  fixedElements:"", 
			
		  //�Ƿ����ʹ�ü��̷����������Ĭ��Ϊtrue 
		  keyboardScrolling:true, 
			
		  //���ƶ��豸�л���ҳ��������ԣ�Ĭ��Ϊ5���ǰ��ٷֱ������������Ϊ100,Խ����Խ�ѻ��� 
		  touchSensitivity:5, 
			
		  //�Ƿ�ѭ��������Ĭ��Ϊfalse���������Ϊtrue����ҳ���ѭ��������������loopTop��loopBottom��������������ע��������Ժ������߲����ݣ��벻Ҫͬʱʹ�� 
		  continuousVertical:false, 
			
		  //ê�����Ƿ���Կ��ƹ���������Ĭ��Ϊtrue���������Ϊfalse����ͨ��ê���Ӷ�λ��ĳ��ҳ����ʾ�����ж���Ч�� 
		  animateAnchor:true, 
			
		  //�Ƿ��¼��ʷ��Ĭ��Ϊtrue�����Լ�¼ҳ���������ʷ��ͨ���������ǰ��������������ע�����������autoScrolling:false,��ô�������Ҳ�����رգ�������Ϊfalse 
		  recordHistory:true, 
			
		  //�󶨲˵�,�趨�����������anchors��ֵ��Ӧ�󣬲˵����Կ��ƹ�����Ĭ��Ϊfalse����������Ϊ�˵���jqueryѡ���� 
		  menu:'#fullpageMenu', 
			
		  //�Ƿ���ʾ������Ĭ��Ϊfalse���������Ϊtrue������ʾСԲ�㣬��Ϊ���� 
		  navigation:true, 
			
		  //����СԲ���λ�ã���������Ϊleft����right 
		  navigationPosition:"right", 
			
		  //����СԲ���tooltips���ã�Ĭ��Ϊ[]��ע�ⰴ��˳������ 
		  navigationTooltips:["page1","page2","page3","page4"], 
			
		  //�Ƿ���ʾ��ǰҳ��ĵ�����tooltip��Ϣ��Ĭ��Ϊfalse 
		  showActiveTooltip:true, 
			
		  //�Ƿ���ʾ����õ�Ƭ�ĵ�����Ĭ��Ϊfalse 
		  slidesNavigation:true, 
			
		  //����õ�Ƭ������λ�ã�Ĭ��Ϊbottom����������Ϊtop��bottom 
		  slidesNavPosition:"bottom", 
			
		  //���ݳ����������Ƿ���ʾ��������Ĭ��Ϊfalse���������Ϊtrue�������ʾ����������������鿴���ݣ�����Ҫjquery.slimscroll�������� 
		  scrollOverflow:false, 
			
		  //section��ѡ����,Ĭ��Ϊ.section 
		  sectionSelector:".section", 
			
		  //slideSelector:slide��ѡ������Ĭ��Ϊ.slide 
		  slideSelector:".slide", 
		  
		  //afterLoad:������ĳһ����Ļص����������� anchorLink �� index ����������anchorLink ��ê���ӵ����ƣ�index ����ţ���1��ʼ����
		  afterLoad: function(anchorLink, index){
			if(index == 1){
				$('.section1').find('p').delay(500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 3){
				$('.section3').find('p').delay(500).animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 4){
				$('.section4').find('p').fadeIn(2000);
			}
		},
		onLeave: function(index, direction){
			if(index == '2'){
				$('.section2').find('p').delay(500).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '3'){
				$('.section3').find('p').delay(500).animate({
					bottom: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '4'){
				$('.section4').find('p').fadeOut(2000);
			}
		}
	}); 
})  