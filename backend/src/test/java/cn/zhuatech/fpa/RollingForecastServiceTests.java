/* Copyright 2026 上海如静知华信息科技有限公司 */
package cn.zhuatech.fpa;
import cn.zhuatech.fpa.service.RollingForecastService;import org.junit.jupiter.api.Test;import java.math.*;import static org.junit.jupiter.api.Assertions.*;
class RollingForecastServiceTests {private final RollingForecastService service=new RollingForecastService();
 @Test void requestsReforecastForLargeOverrun(){var r=service.forecast(new RollingForecastService.Request(b("600"),b("500"),b("200"),b("350"),b("1000")));assertEquals("REFORECAST",r.status());assertEquals(b("150.00"),r.budgetVariance());}
 @Test void keepsSmallVarianceOnPlan(){var r=service.forecast(new RollingForecastService.Request(b("500"),b("500"),b("200"),b("280"),b("1000")));assertEquals("ON_PLAN",r.status());}private BigDecimal b(String v){return new BigDecimal(v);}}
