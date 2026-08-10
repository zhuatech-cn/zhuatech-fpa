/* Copyright 2026 上海如静知华信息科技有限公司 */
package cn.zhuatech.fpa.controller;
import cn.zhuatech.fpa.service.RollingForecastService;import jakarta.validation.Valid;import org.springframework.web.bind.annotation.*;
@RestController @RequestMapping("/api/fpa/insights/rolling-forecast") public class RollingForecastController {private final RollingForecastService service;public RollingForecastController(RollingForecastService service){this.service=service;}@PostMapping RollingForecastService.Result forecast(@Valid @RequestBody RollingForecastService.Request request){return service.forecast(request);}}
