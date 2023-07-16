import Navbar from "../../home/components/Navbar";

export default function FaqsHero() {
  return (
    // HERO WRAPPER
    <section id="about-hero" className="bg-black bg-opacity-70 ">
      <Navbar />
      {/* CONTENT WRAPPER */}
      <div className="bg-black py-32 bg-opacity-70 max-h-screen overflow-hidden ">
        <div className="flex md:flex-row">
          {/* lrft text */}
          <div className="text-left px-6 md:p-16">
            <text className="text-left text-blue-400">Knowledge Base</text>
            <div className="text-left my-10  font-bold text-3xl md:text-5xl text-white">
              Frequently Asked Questions
            </div>
            <text className="text-white text-left text-xl">
              We'er always happy to help!
            </text>
          </div>

          {/* Svg */}
          <div className="hidden relative md:block md:w-1/2 md:2/3 lg:1/2">
            <svg
              className="about-hero-svg"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 1258 778"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
            >
              <defs>
                {" "}
                <clipPath id="erq9t3lfd8r2">
                  {" "}
                  <path
                    id="erq9t3lfd8r3"
                    d="M883.850000,73C1058.350000,73,1199.850000,214.500000,1199.850000,389C1199.850000,563.500000,1058.350000,705,883.850000,705C803.800803,705.110352,726.725712,674.673738,668.350000,619.900000L668.350000,619.900000L657.550000,609.100000L746.850000,519.800000C782.496386,557.333675,831.986678,578.590280,883.750000,578.600000C988.450000,578.600000,1073.350000,493.700000,1073.350000,389C1073.350000,284.300000,988.550000,199.400000,883.850000,199.400000C830.772472,199.379745,780.137972,221.702481,744.350000,260.900000L744.250000,260.800000L703.250000,301.800000L613.850000,212.400000L654.850000,171.400000L654.750000,171.300000C714.375726,108.460209,797.224030,72.912465,883.850000,73ZM289.050000,158.200000C351.870332,158.123459,411.989682,183.739216,455.450000,229.100000L366.650000,317.900000C327.555405,275.287608,261.432026,272.119934,218.443071,310.800072C175.454116,349.480209,171.646304,415.569815,209.908358,458.931302C248.170411,502.292790,314.220046,506.740382,357.950000,468.900000L372.150000,454.100000L378.650000,447.600000L421.050000,405.200000L510.450000,494.600000L503.450000,501.600000L481.050000,524L447.150000,557.900000L446.950000,557.800000C404.223299,597.948263,347.779765,620.268139,289.150000,620.200000C161.550000,620.200000,58.150000,516.800000,58.150000,389.200000C58.150000,261.600000,161.450000,158.200000,289.050000,158.200000ZM527,299.400000L616.400000,388.800000L527,478.200000L437.600000,388.800000ZM597.300000,229.100000L686.700000,318.500000L685.600000,319.600000L675.400000,329.800000L633,372.200000L543.600000,282.800000L586,240.400000Z"
                    fill="none"
                    stroke="none"
                    stroke-width="1"
                  ></path>{" "}
                </clipPath>{" "}
              </defs>{" "}
              <g id="erq9t3lfd8r4" opacity="0.5">
                {" "}
                <g id="erq9t3lfd8r5" opacity="0.5">
                  {" "}
                  <g id="erq9t3lfd8r6">
                    {" "}
                    <g id="erq9t3lfd8r7">
                      {" "}
                      <path
                        id="erq9t3lfd8r8"
                        d="M883.900000,735C796.156553,735.122213,711.674585,701.751478,647.700000,641.700000L647.300000,641.300000L527.200000,521L467.700000,580.500000C382.245598,660.535231,253.956806,673.888270,153.851670,613.167147C53.746534,552.446023,6.311322,432.503460,37.805195,319.737202C69.299068,206.970944,172.018452,128.964239,289.100000,128.900000C324.846325,128.815928,360.222647,136.136341,393,150.400000C424.548459,164.143572,453.089062,183.952109,477,208.700000L526.300000,257.800000L633.400000,150.600000C742.070515,36.294699,914.289085,9.944273,1052.166458,86.526338C1190.043832,163.108402,1258.683472,323.240161,1219.070521,475.902524C1179.457571,628.564886,1041.618003,735.119257,883.900000,735ZM658.400000,389.400000L768.500000,498.900000C799,530.900000,840,548.600000,883.800000,548.600000C971.917032,548.600000,1043.350000,477.167032,1043.350000,389.050000C1043.350000,300.932968,971.917032,229.500000,883.800000,229.500000C839.036617,229.683852,796.378532,248.530245,766.100000,281.500000L765.700000,281.900000ZM289.100000,314.600000C255.780106,314.547825,226.376603,336.372015,216.778164,368.279506C207.179724,400.186998,219.662462,434.611444,247.481123,452.951023C275.299785,471.290601,311.857622,469.196378,337.400000,447.800000L395.400000,389.100000L344.700000,339C330.377556,323.472760,310.224080,314.628429,289.100000,314.600000Z"
                        fill="rgb(51,72,158)"
                        stroke="none"
                        stroke-width="1"
                      ></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
                <g id="erq9t3lfd8r9">
                  {" "}
                  <g id="erq9t3lfd8r10">
                    {" "}
                    <g id="erq9t3lfd8r11">
                      {" "}
                      <path
                        id="erq9t3lfd8r12"
                        d="M883.900000,735C796.156553,735.122213,711.674585,701.751478,647.700000,641.700000L647.300000,641.300000L527.200000,521L467.700000,580.500000C382.245598,660.535231,253.956806,673.888270,153.851670,613.167147C53.746534,552.446023,6.311322,432.503460,37.805195,319.737202C69.299068,206.970944,172.018452,128.964239,289.100000,128.900000C324.846325,128.815928,360.222647,136.136341,393,150.400000C424.548459,164.143572,453.089062,183.952109,477,208.700000L526.300000,257.800000L633.400000,150.600000C742.070515,36.294699,914.289085,9.944273,1052.166458,86.526338C1190.043832,163.108402,1258.683472,323.240161,1219.070521,475.902524C1179.457571,628.564886,1041.618003,735.119257,883.900000,735ZM658.400000,389.400000L768.500000,498.900000C799,530.900000,840,548.600000,883.800000,548.600000C971.917032,548.600000,1043.350000,477.167032,1043.350000,389.050000C1043.350000,300.932968,971.917032,229.500000,883.800000,229.500000C839.036617,229.683852,796.378532,248.530245,766.100000,281.500000L765.700000,281.900000ZM289.100000,314.600000C255.780106,314.547825,226.376603,336.372015,216.778164,368.279506C207.179724,400.186998,219.662462,434.611444,247.481123,452.951023C275.299785,471.290601,311.857622,469.196378,337.400000,447.800000L395.400000,389.100000L344.700000,339C330.377556,323.472760,310.224080,314.628429,289.100000,314.600000Z"
                        fill="rgb(14,49,120)"
                        stroke="none"
                        stroke-width="1"
                      ></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
              <g id="erq9t3lfd8r13">
                {" "}
                <path
                  id="erq9t3lfd8r14"
                  className="isolation:isolate"
                  d="M883.850000,73C1058.350000,73,1199.850000,214.500000,1199.850000,389C1199.850000,563.500000,1058.350000,705,883.850000,705C803.800803,705.110352,726.725712,674.673738,668.350000,619.900000L668.350000,619.900000L657.550000,609.100000L746.850000,519.800000C782.496386,557.333675,831.986678,578.590280,883.750000,578.600000C988.450000,578.600000,1073.350000,493.700000,1073.350000,389C1073.350000,284.300000,988.550000,199.400000,883.850000,199.400000C830.772472,199.379745,780.137972,221.702481,744.350000,260.900000L744.250000,260.800000L703.250000,301.800000L613.850000,212.400000L654.850000,171.400000L654.750000,171.300000C714.375726,108.460209,797.224030,72.912465,883.850000,73ZM289.050000,158.200000C351.870332,158.123459,411.989682,183.739216,455.450000,229.100000L366.650000,317.900000C327.555405,275.287608,261.432026,272.119934,218.443071,310.800072C175.454116,349.480209,171.646304,415.569815,209.908358,458.931302C248.170411,502.292790,314.220046,506.740382,357.950000,468.900000L372.150000,454.100000L378.650000,447.600000L421.050000,405.200000L510.450000,494.600000L503.450000,501.600000L481.050000,524L447.150000,557.900000L446.950000,557.800000C404.223299,597.948263,347.779765,620.268139,289.150000,620.200000C161.550000,620.200000,58.150000,516.800000,58.150000,389.200000C58.150000,261.600000,161.450000,158.200000,289.050000,158.200000ZM527,299.400000L616.400000,388.800000L527,478.200000L437.600000,388.800000ZM597.300000,229.100000L686.700000,318.500000L685.600000,319.600000L675.400000,329.800000L633,372.200000L543.600000,282.800000L586,240.400000Z"
                  opacity="0.2"
                  fill="none"
                  stroke="rgb(68,161,245)"
                  stroke-width="2"
                ></path>{" "}
              </g>{" "}
              <g id="erq9t3lfd8r15">
                {" "}
                <path
                  id="erq9t3lfd8r16"
                  className="isolation:isolate"
                  d="M883.850000,73C1058.350000,73,1199.850000,214.500000,1199.850000,389C1199.850000,563.500000,1058.350000,705,883.850000,705C803.800803,705.110352,726.725712,674.673738,668.350000,619.900000L668.350000,619.900000L657.550000,609.100000L746.850000,519.800000C782.496386,557.333675,831.986678,578.590280,883.750000,578.600000C988.450000,578.600000,1073.350000,493.700000,1073.350000,389C1073.350000,284.300000,988.550000,199.400000,883.850000,199.400000C830.772472,199.379745,780.137972,221.702481,744.350000,260.900000L744.250000,260.800000L703.250000,301.800000L613.850000,212.400000L654.850000,171.400000L654.750000,171.300000C714.375726,108.460209,797.224030,72.912465,883.850000,73ZM289.050000,158.200000C351.870332,158.123459,411.989682,183.739216,455.450000,229.100000L366.650000,317.900000C327.555405,275.287608,261.432026,272.119934,218.443071,310.800072C175.454116,349.480209,171.646304,415.569815,209.908358,458.931302C248.170411,502.292790,314.220046,506.740382,357.950000,468.900000L372.150000,454.100000L378.650000,447.600000L421.050000,405.200000L510.450000,494.600000L503.450000,501.600000L481.050000,524L447.150000,557.900000L446.950000,557.800000C404.223299,597.948263,347.779765,620.268139,289.150000,620.200000C161.550000,620.200000,58.150000,516.800000,58.150000,389.200000C58.150000,261.600000,161.450000,158.200000,289.050000,158.200000ZM527,299.400000L616.400000,388.800000L527,478.200000L437.600000,388.800000ZM597.300000,229.100000L686.700000,318.500000L685.600000,319.600000L675.400000,329.800000L633,372.200000L543.600000,282.800000L586,240.400000Z"
                  opacity="0.2"
                  fill="none"
                  stroke="rgb(68,161,245)"
                  stroke-width="2"
                ></path>{" "}
              </g>{" "}
              <g id="erq9t3lfd8r17">
                {" "}
                <g id="erq9t3lfd8r18" clip-path="url(#erq9t3lfd8r2)">
                  {" "}
                  <g id="erq9t3lfd8r19">
                    {" "}
                    <g id="erq9t3lfd8r20">
                      {" "}
                      <path
                        id="erq9t3lfd8r21"
                        d="M690.690000,196C797.290000,89.400000,970.190000,89.400000,1076.790000,196C1183.390000,302.600000,1183.390000,475.500000,1076.790000,582.100000C970.190000,688.700000,797.290000,688.700000,690.690000,582.100000L392.490000,284.300000C350.162698,241.971239,286.504859,229.308052,231.200423,252.215341C175.895987,275.122630,139.836393,329.089124,139.836393,388.950000C139.836393,448.810876,175.895987,502.777370,231.200423,525.684659C286.504859,548.591948,350.162698,535.928761,392.490000,493.600000Z"
                        fill="none"
                        stroke="rgb(37,96,217)"
                        stroke-width="3"
                        stroke-dashoffset="2426.950000"
                        stroke-dasharray="526.950000,2300"
                      ></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
              <g id="erq9t3lfd8r22" clip-path="url(#erq9t3lfd8r2)">
                {" "}
                <g id="erq9t3lfd8r23">
                  {" "}
                  <g id="erq9t3lfd8r24">
                    {" "}
                    <path
                      id="erq9t3lfd8r25"
                      d="M717.610000,225C808.210000,134.400000,955.110000,134.400000,1045.710000,225C1136.310000,315.600000,1136.310000,462.500000,1045.710000,553.100000C955.110000,643.700000,808.210000,643.700000,717.610000,553.100000L419.910000,255.400000C346.110000,181.600000,226.410000,181.600000,152.610000,255.400000C78.810000,329.200000,78.810000,448.900000,152.610000,522.700000C226.410000,596.500000,346.110000,596.500000,419.910000,522.700000Z"
                      fill="none"
                      stroke="rgb(73,168,255)"
                      stroke-width="3"
                      stroke-dasharray="526.240000,2300"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
